import React from 'react'

import { type HeaderProps } from '../types'

export const Heading = (props: HeaderProps) => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.description ? <p>{props.description}</p> : undefined}
    </header>
  )
}
