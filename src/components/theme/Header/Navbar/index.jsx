import { Container, Logo } from 'components/common'
import { Link } from 'gatsby'
import { ThemeContext } from 'providers/ThemeProvider'
import React, { useContext } from 'react'
import NavbarLinks from '../NavbarLinks'
import { Brand, BrandLogo, Wrapper } from './styles'

export default () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper as={Container}>
      <Brand as={Link} theme={theme} to="/">
        <BrandLogo
          as={Logo}
          color={theme === 'dark' ? '#fff' : '#212121'}
        />
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  )
}
