import React, { useState, useEffect } from 'react'
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
    setThreshold(50)
    initBullshits()

    // fetch('./data/finnnews.txt')
    //   .then(res =>res.text())
    //   .then(data => console.log(data))
  }, [])

  const initBullshits = () => {
    console.log('Initing table')
    const bull1 = {
      bullshit: 'Basdhullii shasdgasdgittii',
      solved: 'Järki settii',
      score: 90
    }
    const bull2 = {
      bullshit: 'ads09ugjasdg',
      solved: 'Semi settii',
      score: 50
    }
    const bull3 = {
      bullshit: 'Äasid asfuiafs',
      solved: 'aoj Ei mitääasd',
      score: 20
    }

    const templateArray = [bull1, bull2, bull3]
    setBullshits(templateArray)
  }

  const sliderChange = event => {
    setThreshold(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Here should be the threshold: {threshold}</p>
      </header>
      <Slider sliderChange={sliderChange} threshold={threshold} />
      <BullshitList bullshits={bullshits} threshold={threshold} />
    </div>
  )
}

export default App
