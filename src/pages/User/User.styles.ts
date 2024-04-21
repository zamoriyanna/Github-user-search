import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  userContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
  button: {
    '&.MuiButton-root': {
      marginBottom: '20px',
    },
  },
}))
