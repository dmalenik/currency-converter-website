import React, {ReactNode} from 'react'

export type LinkProps = {
  icon?: ReactNode
  description?: string
  ariaLabel: string
}

export const Link = ({ icon, description, ariaLabel }: LinkProps) => {
  // TODO: replace button with a tag
  return (
    <button disabled type='button' aria-label={ariaLabel} data-testid='link'>
      {icon ? icon : undefined}
      {description ? description : undefined}
    </button>
  )
}
