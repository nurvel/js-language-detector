import React, { useState, useEffect } from 'react'
import { Container, Loader, Dimmer } from 'semantic-ui-react'

import BullshitList from './components/BullshitList'
import Slider from './components/Slider'

import { decrypData } from './service/decrypter'
import bullshitdata from './data/bullshitdata.json'
import trainingdata from './data/trainingdata.json'

// import './App.css'

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

  const sliderChange = event => {
    setThreshold(event.target.value)
  }

  // if (isLoading) {
  //   return <div>Im loading buddy</div>
  // }

  if (bullshits.length === 0) {
    return (
      <Container>
        <div className="App">
          <Dimmer active={true}>
            <Loader>Analysoidaan bullshit</Loader>
          </Dimmer>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <p>Here should be the threshold: {threshold}</p>
        </header>
        <Slider sliderChange={sliderChange} threshold={threshold} />
        <BullshitList bullshits={bullshits} threshold={threshold} />
      </div>
    </Container>
  )
}

export default App
