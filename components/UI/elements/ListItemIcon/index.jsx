import { StyledListItemIcon } from './styles'

const ListItemIcon = ({ children, ...rest }) => {
  return (
    <StyledListItemIcon {...rest}>
      {children}
    </StyledListItemIcon>
  )
}

export default ListItemIcon
