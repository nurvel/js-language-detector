import React, { useState } from 'react'
import { Table, Label, Button } from 'semantic-ui-react'

const BullshitItem = props => {
  const [toggle, setToggle] = useState(props.toggle)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  if (toggle) {
    return (
      <Table.Row>
        <Table.Cell>
          <Label as="a" color="red" ribbon onClick={handleToggle}>
            Bullshit
          </Label>
        </Table.Cell>
        <Table.Cell>{props.item.bullshit}</Table.Cell>
        <Table.Cell>
          <Button circular toggle onClick={handleToggle}>
            Toggle
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  }

  return (
    <Table.Row>
      <Table.Cell>
        <Label as="a" color="green" ribbon onClick={handleToggle}>
          {Math.floor(props.item.score) + ' %  non-bullshit'}
        </Label>
      </Table.Cell>
      <Table.Cell>{props.item.solved}</Table.Cell>
      <Table.Cell>
        <Button circular toggle onClick={handleToggle}>
          Toggle
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}

export default BullshitItem
