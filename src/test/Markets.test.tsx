import React from 'react'
import { render, screen } from '@testing-library/react'
import { Markets } from '../components'

test('markets render to document', () => {
  render(<Markets />)

  const markets = screen.getByTestId('markets')

  expect(markets).toBeInTheDocument()
})

test('markets has two links', () => {
  render(<Markets />)

  const markets = screen.getByTestId('markets')
  const links = screen.getAllByTestId('link')

  expect(markets).toContainElement(links[0])
  expect(markets).toContainElement(links[1])
})
