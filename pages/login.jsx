import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { TextField, Button } from 'components/UI/elements'
import { FormContainer, FormWrapper, LoginForm, FormItem } from 'styles/pages/login'
import { useI18n } from 'hooks/i18n'
import { useAuth } from 'hooks/auth'

const Login = () => {
  const { t } = useI18n()
  const { login, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      console.log('true')
      router.replace('/admin')
    }
  }, [router, isAuthenticated])

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      id: '99999',
      name: 'Bruno Kurt'
    }
    const token = 'ey999999999999'

    login(user, token)
  }

  return (
    <FormContainer maxWidth="sm">
      <FormWrapper elevation={3}>
        <LoginForm onSubmit={handleSubmit}>
          <FormItem>
            <TextField
              label={ t('pages.login.username_field') }
              fullWidth
            />
          </FormItem>
          <FormItem>
            <TextField
              label={ t('pages.login.password_field') }
              type="password"
              fullWidth
            />
          </FormItem>
          <FormItem>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              fullWidth
            >
              { t('pages.login.login_btn') }
            </Button>
          </FormItem>
        </LoginForm>
      </FormWrapper>
    </FormContainer>
  )
}

export default Login
