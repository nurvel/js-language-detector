import React from 'react'
import { Table, Container } from 'semantic-ui-react'
import BullshitItem from './BullshitItem'

const BullshitList = props => {
  const contentStyle = {
    paddingTop: 20,
    paddingBottom: 20
  }

  return (
    <Container text style={contentStyle}>
      <Table basic>
        <Table.Body>
          {props.bullshits.map(item => (
            <BullshitItem
              key={item.bullshit}
              item={item}
              toggle={item.score <= props.threshold}
            />
          ))}
        </Table.Body>
      </Table>
    </Container>
  )
}

export default BullshitList
