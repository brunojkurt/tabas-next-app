import axios from 'axios'
import { parseCookies } from 'nookies'

export default function (context = {}) {
  const { 'auth.token': token } = parseCookies(context)
  const { locale } = context

  const _axios = axios.create({
    baseURL: locale === 'pt-BR'
      ? process.env.API_URL_PT
      : process.env.API_URL_EN
  })

  if (token) {
    _axios.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return _axios
}
