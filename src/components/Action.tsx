import React from 'react'

export type ActionProps = {
  action: string
}

export const Action = ({ action }: ActionProps) => {
  return (
    <button type='button' disabled>
      {action}
    </button>
  )
}
