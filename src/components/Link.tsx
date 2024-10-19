import React from 'react'

import { type LinkProps } from '../types'

export const Link = (props: LinkProps) => {
  return (
    <button disabled type='button'>
      {props.description}
    </button>
  )
}
