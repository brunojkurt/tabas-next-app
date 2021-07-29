import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Button } from 'components/UI/elements'
import { useRouter } from 'next/router'
import {
  HeaderToolbar,
  Logo,
  LogoWrapper,
  ToolbarContent
} from './styles'

const Header = ({ toolbarContent, elevation = 0, scrollElevation }) => {
  const router = useRouter()
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
          <Link href="/" passHref>
            <a>
              <LogoWrapper>
                <Logo
                  src="/images/logo-header-lg.svg"
                  alt="logo"
                  />
              </LogoWrapper>
            </a>
          </Link>
          <ToolbarContent>
            { toolbarContent }
            { router.locales.map(locale => (
              <Link
                key={locale}
                href="/"
                locale={locale}
                passHref
              >
                <Button
                  color="secondary"
                >
                  {locale}
                </Button>
              </Link>
            ))}
          </ToolbarContent>
        </HeaderToolbar>
      </AppBar>
      <Toolbar variant="dense" />
    </>
  )
}

export default Header
