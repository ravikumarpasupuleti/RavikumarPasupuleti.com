import { Container } from 'components/common'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { ThemeContext } from 'providers/ThemeProvider'
import React, { useContext } from 'react'
import { Text, Wrapper } from './styles'

export default () => {
  const { theme } = useContext(ThemeContext)
  const { AboutImage } = useStaticQuery(graphql`
    query AboutImageQuery {
      AboutImage: imageSharp(fluid: { originalName: { eq: "us.jpg" } }) {
        ...imageFields
      }
    }
  `)
  return (
    <Wrapper as={Container}>
      <a href={AboutImage.fluid.src}></a>
      <br />
      <Text theme={theme}>
        Hi,I am Ravikumar Pasupuleti. I am a Senior Technical Consultant,
        currently working in Sydney, Australia. I love to be called the tech guy
        who solves problems. Understanding client needs and providing right
        solution gives a great satisfaction. Have rich experience in pre-sales,
        proposals, project scoping and technical solution delivery.
      </Text>

      <Text theme={theme}>
        Currently I'm working at
        <a
          href="https://www.dxc.technology"
          rel="noopener noreferrer"
          target="_blank"
        >
          {' '}
          DXC Technolnology
        </a>
      </Text>

      <Text theme={theme}>
        <strong>This blog and its contents are all opinions of my own.</strong>
        <strong>Also, digital dairy for me to track about technology.</strong>
      </Text>
      <Text theme={theme}>
        Connect with me in Linkedin or Twitter if you have any questions.
      </Text>
    </Wrapper>
  )
}
