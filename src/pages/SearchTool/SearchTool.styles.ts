import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  searchContainer: {
    top: '40px',
    padding: '80px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    padding: '20px',
  },
  progress: {
    '&.MuiLinearProgress-root': {
      margin: '30px 0',
      height: '8px',
      borderRadius: '15px',
    },
  },
  title: {
    '&.MuiTypography-root': {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '20px',
    },
  },
}))
