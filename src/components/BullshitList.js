import React from 'react'
import { Table } from 'semantic-ui-react'
import BullshitItem from './BullshitItem'

const BullshitList = props => {
  return (
    <div>
      <Table celled striped>
        <Table.Header>
          <Table.Row key="header">
            <Table.HeaderCell>Score</Table.HeaderCell>
            <Table.HeaderCell>Text</Table.HeaderCell>
            <Table.HeaderCell>Toggle</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.bullshits.map(item => (
            <BullshitItem key={item.bullshit} item={item} toggle={item.score <= props.threshold} />
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default BullshitList
