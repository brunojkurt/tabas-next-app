import styled from 'styled-components'
import { Toolbar } from 'components/UI/elements'

export const HeaderToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Logo = styled.img`
  height: 30px;
  width: auto;
`
export const ToolbarContent = styled.div`
  padding-left: 15px;
`