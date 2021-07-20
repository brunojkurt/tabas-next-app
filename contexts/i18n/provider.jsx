import { useState, useEffect } from 'react'
import I18nContext from './context'
import locales from 'locales'

const I18nProvider = ({ children }) => {
  const [currlanguage, setCurrLanguage] = useState('en')

  useEffect(() => {
    const fetchCurrLanguage = () => {
      const language = localStorage.getItem('language')
      const navigatorLanguage = navigator.language.split('-')[0]
      return language || navigatorLanguage
    }

    fetchCurrLanguage()
  }, [])

  const translation = (translation) => {
    return locales[currlanguage] ? locales[currlanguage][translation] : locales.en[translation]
  }

  const changeLanguage = (language) => {
    localStorage.setItem('language', language)
    setCurrLanguage(language.split('-')[0])
  }

  const contextData = {
    currlanguage,
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
