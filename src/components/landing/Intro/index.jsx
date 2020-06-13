import { SmallerContainer } from 'components/common'
import { Link } from 'gatsby'
import { ThemeContext } from 'providers/ThemeProvider'
import React, { useContext } from 'react'
import { Flex, MagicalButton, Wrapper } from './styles'

export const Intro = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper theme={theme} as={SmallerContainer}>
      <h1>Hi, I am Ravikumar Pasupuleti</h1>
      <p>
        I have rich experinece in business analysis, solution design, solution
        architecture, stakeholder management, implementing and designing
        productivity applications using Office 365 and Microsoft 365 platfrom.
        Passinate about technology and always willing to learn new stuff.
      </p>
      <Flex>
        <MagicalButton as={Link} to="/about">
          About me
        </MagicalButton>
      </Flex>
    </Wrapper>
  )
}
