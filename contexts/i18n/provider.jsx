import { useRouter } from 'next/router'
import I18nContext from './context'
import locales from 'locales'

const I18nProvider = ({ children }) => {
  const { locale } = useRouter()

  const translation = (translation) => {
    return locales[locale][translation]
  }

  const contextData = {
    locale,
    t: translation
  }

  return (
    <I18nContext.Provider value={contextData}>
      {children}
    </I18nContext.Provider>
  )
}

export default I18nProvider
