import React, { useState, useEffect } from 'react'
import { Container, Loader, Dimmer, Header } from 'semantic-ui-react'

import BullshitList from './components/BullshitList'

import { decrypData } from './service/decrypter'
import bullshitdata from './data/bullshitdata.json'
import trainingdata from './data/trainingdata.json'

function App(props) {
  const [threshold, setThreshold] = useState('')
  const [bullshits, setBullshits] = useState([])

  useEffect(() => {
    setThreshold(65)
    initBullshits()
  }, [])

  const initBullshits = () => {
    decrypData(trainingdata, bullshitdata).then(decrypteddata => {
      setBullshits(decrypteddata)
    })
  }

  if (bullshits.length === 0) {
    return (
      <Container>
        <div className="App">
          <Dimmer active={true}>
            <Loader>Analysoidaan bullshittiä...</Loader>
          </Dimmer>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="App">
        <Container fluid>
          <Header as="h2">Bullshit dekryptaus</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
            lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
          </p>
        </Container>
        <header className="App-header">
          <p>Here should be the threshold: {threshold}</p>
        </header>
        <BullshitList bullshits={bullshits} threshold={threshold} />
      </div>
    </Container>
  )
}

export default App
