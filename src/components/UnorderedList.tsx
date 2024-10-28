import React, { ReactNode } from 'react'

import { type UnorderedListProps } from '../types'

export const UnorderedList = (props: UnorderedListProps) => {
  return (
    <ul>
      {props.children.map((c: ReactNode) => (
        <li>{c}</li>
      ))}
    </ul>
  )
}
