import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx = {}) {
  const { 'nextauth.token': token } = parseCookies(ctx)
  const { locale } = ctx

  const api = axios.create({
    baseURL: locale === 'pt-BR'
      ? process.env.API_URL_PT
      : process.env.API_URL_EN
  })

  api.setAuthorization = token => {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  api.interceptors.request.use(config => {
    return config
  })

  if (token) {
    api.setAuthorization(token)
  }

  return api
}
