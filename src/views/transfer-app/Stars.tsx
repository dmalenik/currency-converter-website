import React from 'react'
import { FaRegStar } from 'react-icons/fa6'
import { v4 as uuidv4 } from 'uuid'

import { type StarsProps } from './starsProps'

export const Stars = (props: StarsProps) => {
  // TODO: Implement OWN fractional rating system
  // see CodePen
  return (
    <div>
      {Array.from({ length: props.stars }, (_, i) => (
        <FaRegStar key={uuidv4()} color={i < props.rating ? 'gold' : 'grey'} />
      ))}
    </div>
  )
}
