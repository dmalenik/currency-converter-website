import React from 'react'

import { type LinkProps } from '../types'

export const Link = (props: LinkProps) => {
  // replace button with a tag
  return (
    <button
      disabled
      type='button'
      aria-label={props.ariaLabel ? props.ariaLabel : ''}
    >
      {props.description}
    </button>
  )
}
