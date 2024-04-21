import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles(({ palette: { primary } }: Theme) => ({
  notFountContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
  title: {
    '&.MuiTypography-root': {
      fontSize: '30px',
      color: primary.dark,
    },
  },
}))
