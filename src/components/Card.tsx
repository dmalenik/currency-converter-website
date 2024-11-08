import React from 'react'

import { type CardProps } from '../types'

export const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div data-testid='card'>
      {icon ? <span data-testid='icon'>{icon}</span> : undefined}
      <div>
        {title ? <h4 data-testid='title'>{title}</h4> : null}
        <p data-testid='description'>{description}</p>
      </div>
    </div>
  )
}
