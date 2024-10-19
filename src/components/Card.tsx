import React from 'react'

export const Card = (props: any) => {
  return (
    <div>
      {props.icon}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}
