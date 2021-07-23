import { useEffect, useState } from 'react'
import { AppBar, Toolbar } from 'components/UI/elements'
import {
  HeaderToolbar,
  Logo,
  LogoWrapper,
  ToolbarContent
} from './styles'

const Header = ({ toolbarContent, elevation = 0, scrollElevation }) => {
  const [elevate, setElevate] = useState(elevation)

  useEffect(() => {
    const setElevation = () => {
      setElevate(window.scrollY ? scrollElevation : elevation)
    }

    if (scrollElevation) {
      window.addEventListener('scroll', setElevation)
    
      return () => {
        window.removeEventListener('scroll', setElevation)
      }
    }
  }, [elevation, scrollElevation])

  return (
    <>
      <AppBar elevation={elevate} >
        <HeaderToolbar variant="dense">
          <LogoWrapper>
            <Logo
              src="/images/logo-header-lg.svg"
              alt="logo"
            />
          </LogoWrapper>
          <ToolbarContent>
            { toolbarContent }
          </ToolbarContent>
        </HeaderToolbar>
      </AppBar>
      <Toolbar variant="dense" />
    </>
  )
}

export default Header
