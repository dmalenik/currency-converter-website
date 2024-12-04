import React from 'react'
import { render, screen } from '@testing-library/react'
import { Logo } from '../components'

test('logo rendders to document', () => {
  render(<Logo />)

  const logo = screen.getByTestId('logo')

  expect(logo).toBeInTheDocument()
})

test('logo has icon and text elements', () => {
  render(<Logo />)

  const logo = screen.getByTestId('logo')
  const icon = screen.getByTestId('icon')
  const text = screen.getByTestId('text')

  expect(logo).toContainElement(icon)
  expect(logo).toContainElement(text)
})
