import React, {ReactNode} from 'react'

export type CardProps = {
  icon?: ReactNode
  title?: string
  description: string
}

export const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div data-testid='card'>
      {icon ? <span data-testid='icon'>{icon}</span> : undefined}
      <div>
        {title ? <h4 data-testid='title'>{title}</h4> : undefined}
        <p data-testid='description'>{description}</p>
      </div>
    </div>
  )
}
