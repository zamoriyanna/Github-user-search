import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles(({ palette: { primary, secondary } }: Theme) => ({
  userCardContainer: {
    '&.MuiPaper-root': {
      padding: '40px 60px',
      textAlign: 'center',
      maxWidth: '300px',
      width: '100%',
      borderRadius: '30px',
      boxShadow: `${secondary.contrastText} 0px 10px 50px`,
    },
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
  },
  name: {
    '&.MuiTypography-root': {
      margin: '20px 10px 0',
      fontSize: '20px',
      fontWeight: 'bold',
      color: primary.dark,
      wordWrap: 'break-word',
    },
  },
  company: {
    '&.MuiTypography-root': {
      fontSize: '12px',
      wordWrap: 'break-word',
    },
  },
  divider: {
    '&.MuiDivider-root': {
      margin: '15px 0',
    },
  },
  blogLink: {
    '&.MuiTypography-root': {
      color: primary.main,
      fontSize: '12px',
      wordWrap: 'break-word',
    },
  },
  email: {
    '&.MuiTypography-root': {
      fontSize: '11px',
    },
  },
  followers: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  total: {
    '&.MuiTypography-root': {
      fontSize: '25px',
    },
  },
  caption: {
    '&.MuiTypography-root': {
      fontSize: '12px',
      color: secondary.main,
    },
  },
}))
