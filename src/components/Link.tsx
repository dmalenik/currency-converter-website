import React, { ReactNode } from 'react'

export type LinkProps = {
  icon?: ReactNode
  description?: string
  ariaLabel: string
}

// TODO: replace button with a tag

export const Link = ({ icon, description, ariaLabel }: LinkProps) => {
  return (
    <button disabled type='button' aria-label={ariaLabel} data-testid='link'>
      {icon ? icon : undefined}
      {description ? description : undefined}
    </button>
  )
}
