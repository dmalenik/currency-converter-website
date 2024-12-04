import React from 'react'
import { render, screen } from '@testing-library/react'
import { Stars } from '../components'

test('Stars renders in the document', () => {
  render(<Stars rating={4} stars={5} />)

  const stars = screen.getByTestId('stars')

  expect(stars).toBeInTheDocument()
})

test('star prop value matches to length of rendered star icons', () => {
  render(<Stars rating={4} stars={5} />)

  const stars = screen.queryAllByTestId('star')

  expect(stars).toHaveLength(5)
})
