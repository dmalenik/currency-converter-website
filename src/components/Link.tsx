import React from 'react'

import { type LinkProps } from '../types'

export const Link = ({ icon, description, ariaLabel }: LinkProps) => {
  // TODO: replace button with a tag
  return (
    <button disabled type='button' aria-label={ariaLabel} data-testid='link'>
      {icon}
      {description}
    </button>
  )
}
