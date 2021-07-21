import axios from 'axios'
import { useAuth } from 'hooks/auth'
import { useI18n } from 'hooks/i18n'

const ApiUrl = () => {
  const { currentLanguage } = useI18n()
  return currentLanguage === 'pt'
    ? process.env.API_URL_PT
    : process.env.API_URL_EN
}

const api = axios.create({
  baseURL: ApiUrl()
})

api.interceptors.request.use(config => {
  const { token } = useAuth()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
