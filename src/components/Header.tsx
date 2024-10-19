import React from 'react'

export const Header = (props: any) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  )
}
