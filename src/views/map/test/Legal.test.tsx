import React from 'react'
import { render, screen } from '@testing-library/react'
import { Legal } from '../components'

test('Legal is in the document', () => {
  render(<Legal />)

  const legal = screen.getByTestId('legal')

  expect(legal).toBeInTheDocument()
})

test('Legal contains heading and UnorderedList', () => {
  render(<Legal />)

  const legal = screen.getByTestId('legal')
  const heading = screen.getByTestId('heading')
  const unorderedList = screen.getByTestId('unordered-list')

  expect(legal).toContainElement(heading)
  expect(legal).toContainElement(unorderedList)
})
