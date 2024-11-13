import React from 'react'

// TODO: implement advanced type for range
const range = [1, 2, 3, 4, 5, 6] as const

type Level = (typeof range)[number]

export type HeadingProps = {
  title: string
  level: Level
  description?: string
}

export const Heading = ({ title, level, description }: HeadingProps) => {
  return (
    <header data-testid='heading'>
      {level === 1 ? (
        <h1 data-testid='h1'>{title}</h1>
      ) : level === 3 ? (
        <h3 data-testid='h3'>{title}</h3>
      ) : level === 4 ? (
        <h4 data-testid='h4'>{title}</h4>
      ) : level === 6 ? (
        <h6 data-testid='h6'>{title}</h6>
      ) : undefined}
      {description ? <p data-testid='description'>{description}</p> : undefined}
    </header>
  )
}
