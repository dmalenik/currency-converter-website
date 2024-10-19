import React from 'react'
import { Card } from './Card'

export const List = (props: any) => {
  return (
    <ul>
      {props.list.map(({ id, icon, title, description }: any) => (
        <li key={id}>
          <Card icon={icon} title={title} description={description} />
        </li>
      ))}
    </ul>
  )
}
