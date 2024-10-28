import React from 'react'
import { FaRegStar } from 'react-icons/fa6'

import { type StarsProps } from './starsProps'

export const Stars = (props: StarsProps) => {
  // TODO: Implement OWN fractional rating system
  // see CodePen
  return (
    <div>
      {Array.from({ length: props.stars }, (_, i) => (
        <FaRegStar
          key={crypto.randomUUID()}
          color={i < props.rating ? 'gold' : 'grey'}
        />
      ))}
    </div>
  )
}
