import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from '../components'
import { IoConstruct } from 'react-icons/io5'

test('card renders in the document', () => {
  render(<Card description='card description' />)

  const card = screen.getByTestId('card')

  expect(card).toBeInTheDocument()
})

test('card includes both icon, title, and description attributes', () => {
  render(
    <Card
      icon={<IoConstruct />}
      title='Hello world'
      description='card description'
    />,
  )

  const card = screen.getByTestId('card')
  const icon = screen.getByTestId('icon')
  const title = screen.getByTestId('title')
  const description = screen.getByTestId('description')

  expect(card).toContainElement(icon)
  expect(card).toContainElement(title)
  expect(card).toContainElement(description)
})

test('card includes description only and does not include neither icon nor title', () => {
  render(<Card description='card description' />)

  const card = screen.getByTestId('card')
  const description = screen.getByTestId('description')
  const title = screen.queryByTestId('title')
  const icon = screen.queryByTestId('icon')

  expect(card).toContainElement(description)
  expect(card).not.toContainElement(title)
  expect(card).not.toContainElement(icon)
})
