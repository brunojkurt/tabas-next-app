import { createTheme } from '@material-ui/core/styles'

const themePalette = currTheme => createTheme({
  palette: {
    type: currTheme,
    primary: {
      main: '#020079'
    },
    secondary: {
      main: '#0078e9'
    }
  }
})

export default themePalette