import React from 'react'

export const UnorderedList = (props: any) => {
  return (
    <ul>
      {props.children.map((c: any) => (
        <li>{c}</li>
      ))}
    </ul>
  )
}
