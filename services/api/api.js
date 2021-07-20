import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL
})

api.handleToken = (token) => {
  api.interceptors.request.use(config => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })
}

export default api
