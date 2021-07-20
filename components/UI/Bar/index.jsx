import { StyledBar } from './styles'

const Bar = ({ children, ...rest }) => {
  return (
    <StyledBar {...rest}>
      {children}
    </StyledBar>
  )
}

export default Bar
