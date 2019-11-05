import React from 'react'

const Slider = props => {
  return (
    <div>
      <input
        type="range"
        min="1"
        max="100"
        value={props.threshold}
        onChange={props.sliderChange}
        className="slider"
      />
    </div>
  )
}

export default Slider
