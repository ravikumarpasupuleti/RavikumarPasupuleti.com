import Details from 'components/about/Details'
import Socials from 'components/about/Socials'
import { Container, PageTitle } from 'components/common'
import React from 'react'

export default () => {

  return (
    <Container>
      <PageTitle>About Me</PageTitle>
      <Details />
      <Socials />
    </Container>
  )
}
