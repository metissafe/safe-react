import MetisLogo from 'src/config/assets/token_metis.png'
import {
  EnvironmentSettings,
  ETHEREUM_LAYER,
  ETHEREUM_NETWORK,
  FEATURES,
  NetworkConfig,
  SHORT_NAME,
  WALLETS,
} from 'src/config/networks/network.d'
import { andromedaPriceHelper } from 'src/logic/safe/api/fetchTokenCurrenciesBalances'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'https://stardust-infra.metissafe.tech/cgw/v1',
  txServiceUrl: 'https://stardust-infra.metissafe.tech/txs/api/v1',
  gasPrice: 1e9, // 1 Gwei TODO: add gasPriceOracles
  rpcServiceUrl: 'https://stardust.metis.io/?owner=588',
  safeAppsRpcServiceUrl: 'https://stardust.metis.io/?owner=588',
  networkExplorerName: 'Stardust Explorer',
  networkExplorerUrl: 'https://stardust-explorer.metis.io/',
  networkExplorerApiUrl: 'https://stardust-explorer.metis.io/api',
}

const stardust: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
    },
    production: {
      ...baseConfig,
    },
  },
  network: {
    id: ETHEREUM_NETWORK.STARDUST,
    shortName: SHORT_NAME.STARDUST,
    backgroundColor: '#2f043d',
    textColor: '#a8fff6',
    label: 'Stardust',
    ethereumLayer: ETHEREUM_LAYER.L2,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'tMetis',
      symbol: 'tMETIS',
      decimals: 18,
      logoUri: MetisLogo,
    },
    tokenPriceHelpers: {
      nativeTokenAddress: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
      pricesApi: 'https://api.coingecko.com/api/v3/simple/token_price/',
      priceLogic: andromedaPriceHelper,
    },
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.LEDGER,
    WALLETS.COINBASE,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.PORTIS,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
    WALLETS.KEYSTONE,
    WALLETS.WALLET_CONNECT,
  ],
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP, FEATURES.SPENDING_LIMIT, FEATURES.SAFE_APPS],
}

export default stardust
