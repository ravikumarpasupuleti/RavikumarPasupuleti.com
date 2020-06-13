import { SmallerContainer } from 'components/common'
import { Link } from 'gatsby'
import { ThemeContext } from 'providers/ThemeProvider'
import React, { useContext } from 'react'
import { Item, Links, Wrapper } from './styles'

export default () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper as={SmallerContainer} theme={theme}>
      <Links>
        ©{` Copyright, ${new Date().getFullYear()} `}
        <Item as={Link} to="/">
          Ravikumar Pasupuleti
        </Item>{' '}
      </Links>
    </Wrapper>
  )
}
