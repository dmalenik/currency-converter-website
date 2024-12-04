import React from 'react'
import { Stars } from './Stars'

export type RatingProps = {
  rating: number
}

export const Rating = (props: RatingProps) => {
  return (
    <div>
      <p>
        {props.rating}
        <span>/5</span>
      </p>
      <Stars stars={5} rating={props.rating} />
    </div>
  )
}
