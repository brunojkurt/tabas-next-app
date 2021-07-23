import { StyledForm } from './styles'

const Form = ({ children, onSubmit, ...rest }) => {
  return (
    <StyledForm onSubmit={onSubmit} {...rest}>
      { children }
    </StyledForm>
  )
}

export default Form
