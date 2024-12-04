import React from 'react'
import { render, screen } from '@testing-library/react'
import { Register } from './Register'

test('Register renders to the document', () => {
  render(<Register />)

  const register = screen.getByTestId('register')

  expect(register).toBeInTheDocument()
})

test('Register contains UnorderedList', () => {
  render(<Register />)

  const register = screen.getByTestId('register')
  const action = screen.getByTestId('action')
  const unorderedList = screen.getByTestId('unordered-list')
  const cards = screen.queryAllByTestId('unordered-list-child')

  expect(register).toContainElement(action)
  expect(register).toContainElement(unorderedList)
  expect(cards).toHaveLength(4)
})
