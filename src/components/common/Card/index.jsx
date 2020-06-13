import { ThemeContext } from 'providers/ThemeProvider'
import React, { useContext } from 'react'
import CardBody from './components/CardBody'
import CardFooter from './components/CardFooter'
import CardHeader from './components/CardHeader'
import { StyledCard, Wrapper } from './styles'

export const Card = ({ id, link, title, image, description }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper id={id} as="a" href={link} rel="noopener noreferrer" target="_blank">
      <StyledCard theme={theme}>
       {title && <CardHeader title={title} />}
        <CardBody image={image} title={title} />
       {description && <CardFooter description={description} /> }
      </StyledCard>
    </Wrapper>
  )
}
