import React, { ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { type UnorderedListProps } from '../types'

export const UnorderedList = (props: UnorderedListProps) => {
  return (
    <ul>
      {props.children.map((c: ReactNode) => (
        <li key={uuidv4()}>{c}</li>
      ))}
    </ul>
  )
}
