import { ThemeProvider } from 'contexts/theme'
import { I18nProvider } from 'contexts/i18n'
import { AuthProvider } from 'contexts/auth'
import GlobalStyle from 'theme/globalStyle'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AuthProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthProvider>
      </I18nProvider>
    </ThemeProvider>
  )
}

export default App
