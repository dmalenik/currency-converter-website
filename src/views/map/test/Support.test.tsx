import React from 'react'
import { render, screen } from '@testing-library/react'
import { Support } from '../components'

test('QuickLinks renders in the document', () => {
  render(<Support />)

  const support = screen.getByTestId('support')

  expect(support).toBeInTheDocument()
})

test('QuickLinks includes heading and unordered list', () => {
  render(<Support />)

  const support = screen.getByTestId('support')
  const heading = screen.getByTestId('heading')
  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.getAllByTestId('unordered-list-child')

  expect(support).toContainElement(heading)
  expect(support).toContainElement(unorderedList)
  expect(unorderedListChildren).toHaveLength(4)
})
