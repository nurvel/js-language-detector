import React from 'react'
import { Container } from 'semantic-ui-react'

function Footer(props) {
  const contentStyle = {
    paddingTop: 10,
    paddingBottom: 20
  }

  return (
    <Container style={contentStyle} text textAlign="center">
      Veli-Pekka Nurmi | 
      <a target="_blank" rel="noopener noreferrer" href="https://www.nurmi.dev">
         nurmi.dev
      </a>
    </Container>
  )
}

export default Footer
