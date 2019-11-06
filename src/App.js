import React, { useState, useEffect } from 'react'
import { Container, Loader, Dimmer } from 'semantic-ui-react'

import Content from './components/Content'
import BullshitList from './components/BullshitList'
import Footer from './components/Footer'

import { decrypData } from './service/decrypter'
// import { createModel } from './service/ngramModel'
import bullshitdata from './data/bullshitdata.json'
import trainingdata from './data/trainingdata.json'

function App(props) {
  const [threshold, setThreshold] = useState('')
  const [bullshits, setBullshits] = useState([])

  useEffect(() => {
    setThreshold(65)
    initBullshits()
  }, [])

  const initBullshits = async () => {
    // const finnishModel = await  createModel(trainingdata)
    // const decrypteddata = await  decrypData(finnishModel, bullshitdata)
    // etBullshits(decrypteddata)

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
        <Content />
        <BullshitList bullshits={bullshits} threshold={threshold} />
        <Footer />
      </div>
    </Container>
  )
}

export default App
