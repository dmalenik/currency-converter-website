import React from 'react'
import { Stars } from './Stars'

export type RatingProps = {
  rating: number
}

export const Rating = ({ rating }: RatingProps) => {
  return (
    <div data-testid='rating'>
      <p>
        {rating}
        <span>/5</span>
      </p>
      <Stars stars={5} rating={rating} />
    </div>
  )
}
