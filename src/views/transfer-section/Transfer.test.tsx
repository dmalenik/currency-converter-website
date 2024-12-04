import React from 'react'
import { screen, render } from '@testing-library/react'
import { Transfer } from './Transfer'

test('Transfer redners in the document', () => {
  render(<Transfer />)

  const transfer = screen.getByTestId('transfer')

  expect(transfer).toBeInTheDocument()
})

test('Transfer includes UnorderedList', () => {
  render(<Transfer />)

  const transfer = screen.getByTestId('transfer')
  const unorderedList = screen.getByTestId('unordered-list')
  const cards = screen.queryAllByTestId('unordered-list-child')

  expect(transfer).toContainElement(unorderedList)
  expect(cards).toHaveLength(4)
})
