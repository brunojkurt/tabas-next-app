import { AuthProvider } from 'contexts/auth'
import { ThemeProvider } from 'contexts/theme'
import { I18nProvider } from 'contexts/i18n'
import GlobalStyle from 'theme/globalStyle'

const App = ({ Component, pageProps }) => {
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
