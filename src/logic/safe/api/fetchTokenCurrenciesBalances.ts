import { getBalances, SafeBalanceResponse, TokenInfo } from '@gnosis.pm/safe-react-gateway-sdk'
import axios from 'axios'
import BigNumber from 'bignumber.js'
import { getClientGatewayUrl, getNetworkId, getPriceHelper } from 'src/config'
import { TokenPriceHelpers } from 'src/config/networks/network'
import { checksumAddress } from 'src/utils/checksumAddress'

export type TokenBalance = {
  tokenInfo: TokenInfo
  balance: string
  fiatBalance: string
  fiatConversion: string
}

type FetchTokenCurrenciesBalancesProps = {
  safeAddress: string
  selectedCurrency: string
  excludeSpamTokens?: boolean
  trustedTokens?: boolean
}

type AndromedaPriceHelperParams = {
  vsCurrency: string
  oldTokenBalances: SafeBalanceResponse
  priceHelper: TokenPriceHelpers
}

const getFiatBalance = (tokenBalance: string, conversionRate: string, decimals: number): BigNumber => {
  const result = new BigNumber(tokenBalance)
  return result.multipliedBy(conversionRate).div(new BigNumber(10).pow(decimals))
}

export const andromedaPriceHelper = async ({
  vsCurrency,
  oldTokenBalances,
  priceHelper,
}: AndromedaPriceHelperParams): Promise<SafeBalanceResponse> => {
  let fiatTotal = new BigNumber(0)
  vsCurrency = vsCurrency.toLowerCase()

  const tokens = oldTokenBalances.items.map((item) => {
    return item.tokenInfo.address === '0x0000000000000000000000000000000000000000'
      ? priceHelper.nativeTokenAddress
      : item.tokenInfo.address
  })

  const url =
    priceHelper.pricesApi + `metis-andromeda?contract_addresses=${tokens.join(',')}&vs_currencies=${vsCurrency}`
  let conversionRates = await axios.get(url, { headers: { accept: 'application/json' } })
  conversionRates = conversionRates.data
  conversionRates['0x0000000000000000000000000000000000000000'] =
    conversionRates[priceHelper.nativeTokenAddress.toLowerCase()]

  oldTokenBalances.items = await Promise.all(
    oldTokenBalances.items.map(async (item) => {
      const tokenAddress = item.tokenInfo.address.toLowerCase()
      const decimals = item.tokenInfo.decimals
      let fiatConversion = item.fiatConversion
      try {
        fiatConversion = conversionRates[tokenAddress][vsCurrency]
      } catch (e) {}

      const balance = getFiatBalance(item.balance, fiatConversion, decimals)
      item.fiatConversion = fiatConversion
      item.fiatBalance = balance.toString()
      fiatTotal = fiatTotal.plus(balance)

      return item
    }),
  )
  oldTokenBalances.fiatTotal = fiatTotal.toString()
  return oldTokenBalances
}

export const fetchTokenCurrenciesBalances = async ({
  safeAddress,
  selectedCurrency,
  excludeSpamTokens = true,
  trustedTokens = false,
}: FetchTokenCurrenciesBalancesProps): Promise<SafeBalanceResponse> => {
  const address = checksumAddress(safeAddress)
  const ret = await getBalances(getClientGatewayUrl(), getNetworkId().toString(), address, selectedCurrency, {
    exclude_spam: excludeSpamTokens,
    trusted: trustedTokens,
  })
  let priceHelper = getPriceHelper()
  if (priceHelper) {
    try {
      priceHelper = priceHelper as TokenPriceHelpers
      return andromedaPriceHelper({ vsCurrency: selectedCurrency, oldTokenBalances: ret, priceHelper })
    } catch (e) {}
  }
  return ret
}
