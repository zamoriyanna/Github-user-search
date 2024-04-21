import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@mui/styles'

import theme from './theme'
import AppRoutes from './routes/Route'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          preventDuplicate
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          hideIconVariant
        >
          <AppRoutes />
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
