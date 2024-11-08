import React from 'react'
import { render, screen } from '@testing-library/react'
import { Action } from '../components'

test('action renders in the document', () => {
  render(<Action action='Hello world' />)

  const action = screen.getByRole('button')
  expect(action).toBeInTheDocument()
})

test('action has a type of button', () => {
  render(<Action action='Hello world' />)

  const action = screen.getByRole('button')
  expect(action).toHaveAttribute('type', 'button')
})
