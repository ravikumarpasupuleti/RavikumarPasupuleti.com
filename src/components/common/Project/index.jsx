import { Card, Subtitle } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import React, { useContext } from 'react'
import { Work, Wrapper } from './styles'

export const Project = ({
  title,
  projects,
  link,
  color,
  icon,
}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper>
      <Subtitle theme={theme}>{title}</Subtitle>
      <Work >
        { 
          projects.edges.map(({ node }) => <Card key={node.id} {...node} />)
        }
      </Work>
    </Wrapper>
  )
}
