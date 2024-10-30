import React, { ReactNode } from 'react'

import { type UnorderedListProps } from '../types'

export const UnorderedList = (props: UnorderedListProps) => {
  return (
    <ul>
      {props.children.map((c: ReactNode) => (
        <li key={crypto.randomUUID()}>{c}</li>
      ))}
    </ul>
  )
}
