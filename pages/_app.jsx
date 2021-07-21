import { AuthProvider } from 'contexts/auth'
import { ThemeProvider } from 'contexts/theme'
import { I18nProvider } from 'contexts/i18n'
import GlobalStyle from 'theme/globalStyle'

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <I18nProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </I18nProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
