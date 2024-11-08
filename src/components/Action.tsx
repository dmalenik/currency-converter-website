import React from 'react'

import { type ActionProps } from '../types/'

export const Action = ({ action }: ActionProps) => {
  return (
    <button type='button' disabled>
      {action}
    </button>
  )
}
