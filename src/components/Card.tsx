import React from 'react'

import {type CardProps } from '../types'

export const Card = (props: CardProps) => {
  return (
    <div>
      {props.icon}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}
