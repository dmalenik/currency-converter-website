import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders app', () => {
  render(<App />)

  const app = screen.getByTestId('app')
  expect(app).toBeInTheDocument()
})

test('app includes header, main, and footer sections', () => {
  render(<App />)

  const app = screen.getByTestId('app')
  const header = screen.getByTestId('header')
  const main = screen.getByTestId('main')
  const footer = screen.getByTestId('footer')

  expect(app).toContainElement(header)
  expect(app).toContainElement(main)
  expect(app).toContainElement(footer)
})
