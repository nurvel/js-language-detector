import React from 'react'
import { Table, Label, Button } from 'semantic-ui-react'

const BullshitList = props => {
  const toggleTest = () => {}

  const renderBullshit = item => {
    const score =
      props.threshold >= item.score ? (
        <Label as="a" color="red" ribbon>
          Bullshit
        </Label>
      ) : (
        <div>
          <Label as="a" color="green" ribbon>
            {Math.floor(item.score) + ' %  non-bullshit'} 
          </Label>
        </div>
      )

    const text = props.threshold >= item.score ? item.bullshit : item.solved

    return (
      <Table.Row key={text}>
        <Table.Cell>{score}</Table.Cell>
        <Table.Cell>{text}</Table.Cell>
        {/* <Table.Cell>
          <Button circular toggle>
            Toggle
          </Button>
        </Table.Cell> */}
      </Table.Row>
    )
  }

  return (
    <div>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Score</Table.HeaderCell>
            <Table.HeaderCell>Text</Table.HeaderCell>
            {/* <Table.HeaderCell>Toggle</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.bullshits.map(item => renderBullshit(item))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default BullshitList
