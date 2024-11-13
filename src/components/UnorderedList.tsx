import React, { ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { type UnorderedListProps } from '../types'

export const UnorderedList = ({ children }: UnorderedListProps) => {
  return (
    <ul data-testid='unordered-list'>
      {children.map((c: ReactNode) => (
        <li key={uuidv4()} data-testid='unordered-list-child'>
          {c}
        </li>
      ))}
    </ul>
  )
}
