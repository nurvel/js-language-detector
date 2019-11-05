import React from 'react'

const Slider = props => {
  return (
    <input
      type="range"
      min="1"
      max="100"
      value={props.threshold}
      onChange={props.sliderChange}
      className="slider"
    />
  )
}

export default Slider
