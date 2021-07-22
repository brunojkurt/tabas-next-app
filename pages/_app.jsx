import { AuthProvider } from 'contexts/auth'
import { ServiceProvider } from 'contexts/service'
import { ThemeProvider } from 'contexts/theme'
import { I18nProvider } from 'contexts/i18n'
import GlobalStyle from 'theme/globalStyle'

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <I18nProvider>
        <ServiceProvider>
          <ThemeProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </ServiceProvider>
      </I18nProvider>
    </AuthProvider>
  )
}

export default App
