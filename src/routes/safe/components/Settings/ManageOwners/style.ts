import { makeStyles, createStyles } from '@material-ui/core'

import { lg, sm } from 'src/theme/variables'

export const useStyles = makeStyles(({ palette }) =>
  createStyles({
    formContainer: {
      minHeight: '420px',
    },
    title: {
      padding: lg,
      paddingBottom: 0,
    },
    annotation: {
      paddingLeft: lg,
    },
    hide: {
      '&:hover': {
        backgroundColor: palette.backgroundColor[palette.type],
      },
      '&:hover $actions': {
        visibility: 'initial',
      },
    },
    actions: {
      justifyContent: 'flex-end',
      visibility: 'hidden',
      minWidth: '100px',
      gap: '16px',
    },
    noBorderBottom: {
      '& > td': {
        borderBottom: 'none',
      },
    },
    editOwnerIcon: {
      cursor: 'pointer',
    },
    replaceOwnerIcon: {
      marginLeft: lg,
      cursor: 'pointer',
    },
    controlsRow: {
      backgroundColor: 'white',
      padding: lg,
      borderRadius: sm,
    },
    removeOwnerIcon: {
      marginLeft: lg,
      cursor: 'pointer',
    },
  }),
)
