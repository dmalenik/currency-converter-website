import React from 'react'
import { FaRegStar } from 'react-icons/fa6'
import { v4 as uuidv4 } from 'uuid'

export type StarsProps = {
  stars: number
  rating: number
}

// TODO: implement OWN fractional rating system // see CodePen

export const Stars = ({ stars, rating }: StarsProps) => {
  return (
    <div data-testid='stars'>
      {Array.from({ length: stars }, (_, i) => (
        <FaRegStar key={uuidv4()} color={i < rating ? 'gold' : 'grey'} />
      ))}
    </div>
  )
}
