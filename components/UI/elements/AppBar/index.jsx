import { StyledAppBar } from './styles'

const AppBar = ({ children, ...rest }) => {
  return (
    <StyledAppBar {...rest}>
      { children }
    </StyledAppBar>
  )
}

export default AppBar
