import Router from 'next/router'
import { parseCookies } from 'nookies'

const login = '/login'

export default PrivateComponent => {
  const Component = (props) => <PrivateComponent {...props} />

  Component.getInitialProps = async (ctx) => {
    const {
      'auth.token': token,
      'auth.user': user
    } = parseCookies(ctx)

    if (!token || !user) {
      if (ctx.res) {
        ctx.res?.writeHead(302, {
          Location: login,
        })
        ctx.res?.end()
      } else {
        Router.replace(login)
      }
    } else if (PrivateComponent.getInitialProps) {
      const privateComponentProps = await PrivateComponent.getInitialProps({ ...ctx, token, user })
      return { ...privateComponentProps }
    }

    return { token, user }
  }

  return Component
}
