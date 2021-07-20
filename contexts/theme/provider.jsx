import { useState, useEffect } from 'react'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import themePalette from 'theme/palette'

const CustomThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light')

  useEffect(() => {
    const fetchTheme = () => {
      const theme = localStorage.getItem('theme')
      theme && setCurrentTheme(theme)
    }
    fetchTheme()
  }, [])

  const setTheme = (theme) => {
    setCurrentTheme(theme)
    localStorage.setItem('theme', theme)
  }

  const methods = {
    setTheme
  }

  return (
    <ThemeProvider theme={{ ...themePalette(currentTheme), methods, currentTheme }}>
      <StylesProvider injectFirst>
        <StyledComponentsThemeProvider theme={themePalette(currentTheme)}>
          {children}
        </StyledComponentsThemeProvider>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default CustomThemeProvider
