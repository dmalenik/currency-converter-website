import React from 'react'
import { render, screen } from '@testing-library/react'
import { Legal } from '../components'

test('Legal is in the document', () => {
  render(<Legal />)

  const legal = screen.getByTestId('legal')

  expect(legal).toBeInTheDocument()
})

test('Legal contains UnorderedList', () => {
  render(<Legal />)

  const legal = screen.getByTestId('legal')
  const unorderedList = screen.getByTestId('unordered-list')
  const links = screen.queryAllByTestId('unordered-list-child')

  expect(legal).toContainElement(unorderedList)
  expect(links).toHaveLength(5)
})
