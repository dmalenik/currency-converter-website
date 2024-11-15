import React from 'react'

export type ActionProps = {
  action: string
}

export const Action = ({ action }: ActionProps) => {
  return (
    <button type='button' disabled data-testid='action'>
      {action}
    </button>
  )
}
