import { useState } from 'react'
import { setCookie, destroyCookie } from 'nookies'
import AuthContext from './context'
import api from 'services/api'

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({})

  const login = (user, token) => {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
    setCookie(null, 'auth.user', JSON.stringify(user), {
      maxAge: 86400 * 7,
      path: '/'
    })
    setCookie(null, 'auth.token', token, {
      maxAge: 86400 * 7,
      path: '/'
    })
    setState({ user, token })
  }

  const logout = () => {
    setState({})
    destroyCookie(null, 'auth.user')
    destroyCookie(null, 'auth.token')
  }

  const isAuthenticated = () => {
    return !!state.token
  }

  const contextData = {
    ...state,
    login,
    logout,
    isAuthenticated
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
