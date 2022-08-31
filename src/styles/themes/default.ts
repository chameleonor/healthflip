import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          padding: 0,
          margin: 0,
          boxSizing: 'border-box',
        },
      },
    },
  },
  palette: {
    gray: {
      '300': '#CFCFCF',
      '500': '#757575',
    },
    gold: {
      '700': '#C4A123',
    },
    blue: {
      '300': '#1976d2',
      '500': '#0D1769',
    },
    white: '#FFF',
  },
  typography: {
    fontFamily: ['Roboto Mono', 'Roboto', 'sans-serif'].join(','),
    fontWeightRegular: 400,
  },
})
