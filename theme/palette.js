import { createTheme } from '@material-ui/core/styles'

const themePalette = currTheme => createTheme({
  palette: {
    type: currTheme || 'light',
    primary: {
      main: '#000',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#dbb95a',
      contrastText: '#FFF'
    }
  }
})

export default themePalette
