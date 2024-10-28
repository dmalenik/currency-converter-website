import React from 'react'

import { type ActionProps } from '../types/'

export const Action = (props: ActionProps) => {
  return (
    <button type='button' disabled>
      {props.action}
    </button>
  )
}
