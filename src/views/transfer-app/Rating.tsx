import React from 'react'
import { Stars } from './Stars'

import { type RatingProps } from './ratingProps'

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
