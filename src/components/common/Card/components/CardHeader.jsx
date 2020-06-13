import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'providers/ThemeProvider'

const CardHeader = ({ title }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper theme={theme}>
      <h3>{title}</h3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;

  h3 {
    margin: 0;
    color: #212121;

    ${({ theme }) =>
      theme === 'dark' &&
      `
				color: #fff;
		`};
  }
`

export default CardHeader
