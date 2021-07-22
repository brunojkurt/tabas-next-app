import { useState, useEffect } from 'react'
import I18nContext from './context'
import locales from 'locales'

const I18nProvider = ({ children }) => {
  const [currentlanguage, setCurrentLanguage] = useState('pt')

  useEffect(() => {
    const fetchCurrLanguage = () => {
      setCurrentLanguage(() => {
        return window.location.hostname.includes('br')
          ? 'pt'
          : 'en'
      })
    }

    fetchCurrLanguage()
  }, [])

  const translation = (translation) => {
    return locales[currentlanguage] ? locales[currentlanguage][translation] : locales.en[translation]
  }

  const contextData = {
    currentlanguage,
    t: translation
  }

  return (
    <I18nContext.Provider value={contextData}>
      {children}
    </I18nContext.Provider>
  )
}

export default I18nProvider
