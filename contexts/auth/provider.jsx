import { useState, useEffect } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import AuthContext from './context'
import { api } from 'services/api'

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({})

  useEffect(() => {
    const {
      'auth.token': token,
      'auth.user': user
    } = parseCookies()
    if (token && user) {
      setState({
        user: JSON.parse(user),
        token
      })
    }
  }, [])

  const login = (user, token) => {
    setCookie(null, 'auth.user', JSON.stringify(user), {
      maxAge: 86400 * 7,
      path: '/'
    })

    setCookie(null, 'auth.token', token, {
      maxAge: 86400 * 7,
      path: '/'
    })

    api.setAuthorization(token)

    setState({ user, token })
  }

  const logout = () => {
    setState({})
    destroyCookie(null, 'auth.user')
    destroyCookie(null, 'auth.token')
  }

  const contextData = {
    ...state,
    login,
    logout,
    isAuthenticated: state.user && state.token
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
