import styled from 'styled-components'
import { Container, Paper, Form } from 'components/UI/elements'

export const FormContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormWrapper = styled(Paper)`
  width: 100%;
  min-height: 150px;
  padding: 10px;
  max-width: 420px;
`
export const LoginForm = styled(Form)`
  width: 100%;
  height: auto;
`
export const FormItem = styled.div`
  padding: 10px 0;
`
