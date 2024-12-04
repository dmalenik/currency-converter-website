import React from 'react'
import { FaRegStar } from 'react-icons/fa6'
import { v4 as uuidv4 } from 'uuid'

export type StarsProps = {
  stars: number
  rating: number
}

// TODO: implement OWN fractional rating system // see CodePen

export const Stars = (props: StarsProps) => {
  return (
    <div data-testid='stars'>
      {Array.from({ length: props.stars }, (_, i) => (
        <FaRegStar key={uuidv4()} color={i < props.rating ? 'gold' : 'grey'} />
      ))}
    </div>
  )
}
