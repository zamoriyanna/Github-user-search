import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles(({ palette: { primary } }: Theme) => ({
  searchContainer: {
    backgroundColor: primary.light,
    borderRadius: '50px',
    padding: '10px 20px',
    width: '500px',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    '&.MuiInputBase-root': {
      width: '100%',
    },
  },
  icon: {
    color: primary.main,
  },
}))
