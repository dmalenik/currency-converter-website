import React from 'react'

import { type HeadingProps } from '../types'

export const Heading = (props: HeadingProps) => {
  return (
    <header>
      {props.heading.size === 1 ? (
        <h1>{props.heading.title}</h1>
      ) : props.heading.size === 3 ? (
        <h3>{props.heading.title}</h3>
      ) : props.heading.size === 4 ? (
        <h4>{props.heading.title}</h4>
      ) : props.heading.size === 6 ? (
        <h6>{props.heading.title}</h6>
      ) : undefined}
      {props.description ? <p>{props.description}</p> : undefined}
    </header>
  )
}
