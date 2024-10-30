import React from 'react'

import {type CardProps } from '../types'

export const Card = (props: CardProps) => {
  return (
    <div>
      {props.icon}
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  )
}
