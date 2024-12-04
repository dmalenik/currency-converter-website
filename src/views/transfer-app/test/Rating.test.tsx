import React from 'react'
import { render, screen } from '@testing-library/react'
import { Rating } from '../components'

test('Rating renders in the document', () => {
  render(<Rating rating={4} />)

  const rating = screen.getByTestId('rating')

  expect(rating).toBeInTheDocument()
})

test('Rating includes Stars', () => {
  render(<Rating rating={3} />)

  const rating = screen.getByTestId('rating')
  const stars = screen.getByTestId('stars')

  expect(rating).toContainElement(stars)
})
