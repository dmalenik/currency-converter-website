import React from 'react'

export const Action = (props: any) => {
  return (
    <button type='button' disabled>
      {props.action}
    </button>
  )
}
