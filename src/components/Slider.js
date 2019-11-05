import React from 'react'
import { Menu } from 'semantic-ui-react'

const Slider = props => {

  return (
    <Menu
    floated='true'
    >
      <input
        type="range"
        min="1"
        max="100"
        value={props.threshold}
        onChange={props.sliderChange}
        className="slider"
      />
    </Menu>
  )
}

export default Slider
