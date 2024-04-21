import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles(({ palette: { secondary } }: Theme) => ({
  list: {
    '&.MuiList-root': {
      padding: '25px 0',
    },
  },
  listItem: {
    '&.MuiListItem-root': {
      color: 'inherit',
      cursor: 'pointer',
      border: `1px solid ${secondary.light}`,
      borderRadius: '10px',
      padding: '15px 10px',
      margin: '10px 0',
      '&:hover': {
        backgroundColor: secondary.light,
      },
    },
  },
}))
