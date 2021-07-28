import { useEffect } from 'react'
import { AuthProvider } from 'contexts/auth'
import { ThemeProvider } from 'contexts/theme'
import { I18nProvider } from 'contexts/i18n'
import GlobalStyle from 'styles/globalStyle'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }, [])

  return (
    <AuthProvider>
      <I18nProvider>
        <ThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </I18nProvider>
    </AuthProvider>
  )
}

export default App
