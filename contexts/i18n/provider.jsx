import { useState, useEffect } from 'react'
import { setCookie } from 'nookies'
import I18nContext from './context'
import locales from 'locales'

const I18nProvider = ({ children, language }) => {
  const [currentlanguage, setCurrentLanguage] = useState(language || 'pt')

  useEffect(() => {
    if (!language) {
      const navigatorLanguage = navigator.language.split('-')[0]
      setCookie(null, 'language', language || navigatorLanguage, {
        maxAge: 86400 * 90,
        path: '/'
      })
    }

  }, [language])

  const translation = (translation) => {
    return locales[currentlanguage] ? locales[currentlanguage][translation] : locales.en[translation]
  }

  const changeLanguage = (lang) => {
    setCookie(null, 'language', lang, {
      maxAge: 86400 * 90,
      path: '/'
    })
    setCurrentLanguage(lang)
  }

  const contextData = {
    currentlanguage,
    changeLanguage,
    t: translation
  }

  return (
    <I18nContext.Provider value={contextData}>
      {children}
    </I18nContext.Provider>
  )
}

export default I18nProvider
