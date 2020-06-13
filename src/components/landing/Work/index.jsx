import { Container } from 'components/common'
import { graphql } from 'gatsby'
import React from 'react'
// import YouTube from './YouTube'
export const imageFields = graphql`
  fragment imageFields on ImageSharp {
    fluid(maxWidth: 960) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
`

export const Work = () => <Container>{/* <YouTube /> */}</Container>
