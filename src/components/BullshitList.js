import React from 'react'

const BullshitList = props => {
  const renderBullshit = item => {
    const score = props.threshold >= item.score ? null : item.score
    const text = props.threshold >= item.score ? item.bullshit : item.solved

    return (
      <tr>
        <td>{score}</td>
        <td>{text}</td>
      </tr>
    )
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Score</th>
            <th>bullshit</th>
          </tr>
        </thead>
        <tbody>{props.bullshits.map(item => renderBullshit(item))}</tbody>
      </table>
    </div>
  )
}

export default BullshitList
