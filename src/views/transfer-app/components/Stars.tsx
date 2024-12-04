import React from 'react'
import { FaRegStar } from 'react-icons/fa6'
import { v4 as uuidv4 } from 'uuid'

export type StarsProps = {
  stars: number
  rating: number
}

export const Stars = (props: StarsProps) => {
  // TODO: implement OWN fractional rating system // see CodePen
  return (
    <div>
      {Array.from({ length: props.stars }, (_, i) => (
        <FaRegStar key={uuidv4()} color={i < props.rating ? 'gold' : 'grey'} />
      ))}
    </div>
  )
}
