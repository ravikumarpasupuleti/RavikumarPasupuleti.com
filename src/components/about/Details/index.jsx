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
      <a href={AboutImage.fluid.src}>
        {/* <Img
          fluid={AboutImage.fluid}
          alt="Rahul, Parvathy and Gautham at The Farm, Byron Bay"
       />*/}
      </a>
      <br />
      <Text theme={theme}>
        Hi,I am Ravikumar Kumar. I am a Senior Technical Consultant, currently
        working in Sydney, Australia. I love to be called the tech guy who
        solves problems. Understanding client needs and providing right solution
        gives a great satisfaction.
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
        If you want to drop a mail, feel free to sent it to{' '}
        <a href="mailto:hello@ravikumarpasupuleti.com?subject=Hello Ravikumar!">
          hello@ravikumarpasupuleti.com
        </a>
        .
      </Text>
    </Wrapper>
  )
}
