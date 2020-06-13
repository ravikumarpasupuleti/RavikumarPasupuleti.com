import { SmallerContainer } from 'components/common'
import { Link } from 'gatsby'
import React from 'react'
import { Center } from './styles'

export default () => (
  <Center textAlign="center" pt={6} pb={6} as={SmallerContainer}>
    <h1>404 PAGE NOT FOUND</h1>
    <div >
      <form id='search-form'  action="https://google.com/cse" method="GET">
        <input type="hidden" name="cx" value="013909293779229500224:v37rx6hsidk" />
        <input name="ie" type="hidden" value="UTF-8" />
        <input  type="text" name="q" results="0" placeholder="Search" />
     </form>
    </div>
    
    <Link to="/">Go Back Home</Link>
  </Center>
)
