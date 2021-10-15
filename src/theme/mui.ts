import { alpha } from '@material-ui/core/styles/colorManipulator'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'
import {
  boldFont,
  bolderFont,
  border,
  buttonLargeFontSize,
  disabled,
  error,
  extraSmallFontSize,
  fontColor,
  largeFontSize,
  lg,
  mainFontFamily,
  md,
  mediumFontSize,
  primary,
  regularFont,
  secondary,
  secondaryBackground,
  secondaryFontFamily,
  secondaryText,
  sm,
  smallFontSize,
  xs,
  darkColors,
  background,
  surface01dp,
  rejection,
  grey4,
  grey2,
  secondaryLabel,
  highEmphasis,
} from './variables'

// declare module '@material-ui/core/styles/createTheme' {
//   interface Theme {
//     status: {
//       danger: React.CSSProperties['color']
//     }
//   }
//   interface ThemeOptions {
//     status: {
//       danger: React.CSSProperties['color']
//     }
//   }
// }

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    backgroundColor: Palette['primary']
    secondaryBackground: Palette['primary']
    secondaryText: Palette['primary']
    surface01dp: Palette['primary']
    rejection: Palette['primary']
    grey2: Palette['primary']
    grey4: Palette['primary']
    secondaryLabel: Palette['primary']
    highEmphasis: Palette['primary']
  }
  interface PaletteOptions {
    backgroundColor: PaletteOptions['primary']
    secondaryBackground: PaletteOptions['primary']
    secondaryText: PaletteOptions['primary']
    surface01dp: PaletteOptions['primary']
    rejection: PaletteOptions['primary']
    grey2: PaletteOptions['primary']
    grey4: PaletteOptions['primary']
    secondaryLabel: PaletteOptions['primary']
    highEmphasis: PaletteOptions['primary']
  }
}

const palette: PaletteOptions = {
  type: 'light',
  contrastThreshold: 3,
  tonalOffset: 0.2,
  // Default theme colours
  primary: {
    main: primary,
    dark: darkColors.primary,
  },
  secondary: {
    main: secondary,
    dark: darkColors.secondary,
  },
  error: {
    main: error,
    dark: darkColors.errorColor,
  },
  success: {
    main: secondary,
    dark: darkColors.secondary,
  },
  // Custom theme colours
  backgroundColor: {
    main: background,
    dark: darkColors.background,
  },
  secondaryBackground: {
    main: secondaryBackground,
    dark: darkColors.secondaryBackground,
  },
  secondaryText: {
    main: secondaryText,
    dark: darkColors.secondaryTextOrSvg,
  },
  surface01dp: {
    main: surface01dp,
    dark: darkColors.surface01dp,
  },
  rejection: {
    main: rejection,
    dark: darkColors.rejection,
  },
  grey2: {
    main: grey2,
    dark: darkColors.grey2,
  },
  grey4: {
    main: grey4,
    dark: darkColors.grey4,
  },
  secondaryLabel: {
    main: secondaryLabel,
    dark: darkColors.secondaryLabel,
  },
  highEmphasis: {
    main: highEmphasis,
    dark: darkColors.highEmphasis,
  },
}

// see https://material-ui-next.com/customization/themes/
// see https://github.com/mui-org/material-ui/blob/v1-beta/src/styles/createMuiTheme.js
const theme = {
  typography: {
    fontFamily: mainFontFamily,
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      label: {
        lineHeight: '1',
        fontSize: largeFontSize,
        fontWeight: regularFont,
      },
      root: {
        fontFamily: secondaryFontFamily,
        letterSpacing: '0.9px',
        '&$disabled': {
          color: disabled,
        },
        color: disabled,
        textTransform: 'none',
        borderRadius: sm,
      },
      contained: {
        boxShadow: '1px 2px 10px 0 rgba(212, 212, 211, 0.59)',
      },
      containedPrimary: {
        backgroundColor: secondary,
      },
      containedSecondary: {
        backgroundColor: error,
        '&:hover': {
          backgroundColor: '#d4d5d3',
        },
      },
      outlinedPrimary: {
        border: `2px solid ${primary}`,
        '&:hover': {
          border: `2px solid ${primary}`,
        },
      },
      sizeLarge: {
        padding: `${md} ${lg}`,
        minHeight: '52px',
        fontSize: buttonLargeFontSize,
      },
      sizeSmall: {
        minWidth: '130px',
        fontSize: smallFontSize,
      },
      textSecondary: {
        '&:hover': {
          borderRadius: '3px',
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: sm,
      },
    },
    MuiStepper: {
      root: {
        padding: `${lg} 0 0 15px`,
        background: 'transparent',
      },
    },
    MuiIconButton: {
      root: {
        padding: '0',
      },
    },
    MuiChip: {
      root: {
        fontFamily: secondaryFontFamily,
      },
    },
    MuiStepIcon: {
      root: {
        fontSize: '22px',
        color: `${secondaryText} !important`,
      },
      completed: {
        color: `${secondary} !important`,
      },
      active: {
        color: `${secondary} !important`,
        fontWeight: boldFont,
      },
    },
    MuiStepContent: {
      root: {
        borderLeft: `1px solid ${secondaryText}`,
      },
    },
    MuiTypography: {
      body1: {
        fontFamily: secondaryFontFamily,
        letterSpacing: '-0.5px',
        fontSize: mediumFontSize,
      },
      body2: {
        fontFamily: secondaryFontFamily,
      },
    },
    MuiFormHelperText: {
      root: {
        color: secondary,
        fontFamily: secondaryFontFamily,
        fontSize: '12px',
        marginTop: '0px',
        order: '0',
        padding: `0 0 0 ${md}`,
        position: 'absolute',
        top: '5px',
        zIndex: 1, // for firefox
      },
    },
    MuiInput: {
      root: {
        backgroundColor: secondaryBackground,
        borderRadius: '5px',
        color: primary,
        fontFamily: secondaryFontFamily,
        fontSize: mediumFontSize,
        lineHeight: '56px',
        order: '1',
        padding: `0 ${md}`,
        '&:$disabled': {
          color: '#0000ff',
        },
        '&:active': {
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
        },
      },
      input: {
        color: primary,
        display: 'flex',
        height: 'auto',
        letterSpacing: '0.5px',
        padding: '0',
        textOverflow: 'ellipsis',
        '&::-webkit-input-placeholder': {
          color: disabled,
        },
      },
      underline: {
        '&::before': {
          visibility: 'hidden',
          borderBottomColor: secondary,
          borderBottomStyle: 'solid',
          borderBottomWidth: '2px !important',
        },
        // after pseudo element in the underline is used for the focus border
        '&::after': {
          borderBottomColor: secondary,
          borderBottomStyle: 'solid',
          borderBottomWidth: '2px !important',
        },
        '&.isValid::before': {
          visibility: 'visible',
          borderBottomColor: `${secondary} !important`,
        },
        '&.isInvalid::after': {
          borderBottomColor: `${error} !important`,
        },
        '&.isValid::after': {
          display: 'none',
        },
        '&:focus': {
          visibility: 'visible',
        },
        '&:hover': {
          visibility: 'visible',
        },
      },
      formControl: {
        marginTop: '0 !important',
      },
    },
    MuiFilledInput: {
      underline: {
        '&::before': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '2px !important',
        },
        '&::after': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '2px !important',
        },
        '&.isValid::before': {
          borderBottomColor: `${secondary} !important`,
        },
        '&.isInvalid::after': {
          borderBottomColor: `${error} !important`,
        },
        '&.isValid::after': {
          display: 'none',
        },
      },
    },
    MuiStepLabel: {
      label: {
        textAlign: 'left',
        color: secondary,
        '&$active': {
          color: primary,
        },
      },
    },
    MuiSvgIcon: {
      colorSecondary: {
        color: secondaryText,
      },
    },
    MuiSnackbar: {
      root: {
        maxWidth: '100%',
        width: '340px',
      },
    },
    MuiSnackbarContent: {
      root: {
        borderRadius: `${sm} !important`,
        boxShadow: '0 0 10px 0 rgba(212, 212, 211, 0.59)',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        padding: '20px',
        width: '100%',
      },
      message: {
        color: fontColor,
        flexGrow: '1',
        fontFamily: 'Averta',
        fontSize: '14px',
        lineHeight: '1.43',
        padding: '0 10px 0 0',
        '& > span': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: '160px',
          wordBreak: 'break-word',
          '& > img': {
            display: 'block',
            marginRight: '13px',
          },
        },
      },
      action: {
        paddingLeft: '0',
        '& > button': {
          color: secondaryText,
        },
      },
    },
    MuiTab: {
      root: {
        fontFamily: secondaryFontFamily,
        fontWeight: 'normal',
        fontSize: extraSmallFontSize,
        '&$selected': {
          fontWeight: boldFont,
        },
        '@media (min-width: 960px)': {
          fontSize: extraSmallFontSize, // override material-ui media query
        },
      },
    },
    MuiTableContainer: {
      root: {
        marginLeft: '-10px',
        marginRight: '-10px',
        marginTop: '-10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '10px',
      },
    },
    MuiTablePagination: {
      toolbar: {
        paddingRight: '15px',
        '& > span:nth-child(2)': {
          order: 1,
        },
      },
      selectIcon: {
        height: '100%',
        top: '0px',
      },
      caption: {
        color: disabled,
        fontFamily: secondaryFontFamily,
        fontSize: mediumFontSize,
        order: '2',
      },
      input: {
        color: disabled,
        order: '2',
        width: '60px',
      },
      select: {
        minWidth: lg,
        paddingRight: '30',
      },
      actions: {
        color: disabled,
        order: '4',
      },
    },
    MuiTableSortLabel: {
      root: {
        fontSize: extraSmallFontSize,
      },
      active: {
        fontWeight: boldFont,
      },
    },
    MuiTableCell: {
      root: {
        borderBottomWidth: '2px',
        fontFamily: secondaryFontFamily,
        fontSize: mediumFontSize,
      },
      head: {
        letterSpacing: '1px',
        textTransform: 'uppercase',
      },
      body: {
        color: primary,
        fontWeight: 'normal',
        letterSpacing: 'normal',
        overflow: 'hidden',
        paddingBottom: xs,
        paddingTop: xs,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    MuiBackdrop: {
      root: {
        backdropFilter: 'blur(1px)',
        backgroundColor: 'rgba(228, 232, 241, 0.75)',
        top: '52px',
      },
    },
    MuiMenuItem: {
      root: {
        fontFamily: secondaryFontFamily,
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 'auto',
      },
    },
    MuiListItemText: {
      primary: {
        color: primary,
        fontFamily: secondaryFontFamily,
        fontSize: mediumFontSize,
        fontWeight: bolderFont,
      },
      secondary: {
        color: disabled,
        fontFamily: secondaryFontFamily,
        fontSize: smallFontSize,
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        '&$disabled': {
          color: alpha(secondary, 0.5),
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        '&$disabled': {
          color: primary,
        },
      },
    },
  },
  palette: palette,
} as any

export const darkMuiTheme: typeof theme = {
  ...theme,
  palette: {
    ...palette,
    type: 'dark',
  },
}

export default theme

export const DropdownListTheme = {
  ...theme,
  overrides: {
    ...theme.overrides,
    MuiPaper: {
      root: {
        marginTop: '10px',
      },
      elevation0: {
        boxShadow: '1px 2px 10px 0 rgba(212, 212, 211, 0.59)',
      },
      rounded: {
        borderRadius: xs,
      },
    },
    MuiList: {
      padding: {
        paddingBottom: '0',
        paddingTop: '0',
      },
    },
    MuiListItem: {
      root: {
        borderBottom: `2px solid ${border}`,
        '&:last-child': {
          borderBottom: 'none',
        },
        boxSizing: 'border-box',
      },
      button: {
        '&:hover': {
          backgroundColor: '#f7f5f5',
        },
      },
    },
  },
}
