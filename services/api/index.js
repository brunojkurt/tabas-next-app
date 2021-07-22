import axios from 'axios'
import { parseCookies } from 'nookies'
import apartments from './apartments'

export function getAPIClient(context) {
  const { 'auth.token': token } = parseCookies(context)

  const api = axios.create({
    baseURL: context.req.headers.host.includes('br')
      ? process.env.API_URL_PT
      : process.env.API_URL_EN
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  api.apartments = apartments(api)

  return api
}
