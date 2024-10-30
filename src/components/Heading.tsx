import React from 'react'

import { type HeadingProps } from '../types'

export const Heading = (props: HeadingProps) => {
  return (
    <header>
      {props.size === 1 ? (
        <h1>{props.title}</h1>
      ) : props.size === 3 ? (
        <h3>{props.title}</h3>
      ) : props.size === 4 ? (
        <h4>{props.title}</h4>
      ) : props.size === 6 ? (
        <h6>{props.title}</h6>
      ) : undefined}
      {props.description ? <p>{props.description}</p> : undefined}
    </header>
  )
}
