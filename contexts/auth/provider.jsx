import { useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import AuthContext from './context'

const AuthProvider = ({ children, initialAuthState }) => {
  const [state, setState] = useState(initialAuthState)

  const login = (user, token) => {
    setState(state => ({ ...state, user, token }))
    setCookie(null, 'user', JSON.stringify(user), {
      maxAge: 86400 * 7,
      path: '/'
    })
    setCookie(null, 'token', token, {
      maxAge: 86400 * 7,
      path: '/'
    })
  }

  const logout = () => {
    setState({
      user: null,
      token: null
    })
    destroyCookie(null, 'user')
    destroyCookie(null, 'token')
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

export async function getServerSiderProps(context) {
  const cookies = parseCookies(context)

  return {
    props: {
      initialAuthState: {
        user: JSON.parse(cookies.user),
        token: JSON.parse(cookies.token)
      }
    }
  }
}

export default AuthProvider
