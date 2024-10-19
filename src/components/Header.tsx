import React from 'react'

export const Header = (props: any) => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.description ? <p>{props.description}</p> : undefined}
    </header>
  )
}
