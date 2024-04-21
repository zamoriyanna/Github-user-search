import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#f4f5fb',
      main: '#9575cd',
      dark: '#311b92',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ede7f6',
      main: '#757575',
      contrastText: '#0000001a',
    },
  },
})

export default theme
