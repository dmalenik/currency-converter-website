import React from 'react'
import { render, screen } from '@testing-library/react'
import { Support } from '../components'

test('Support renders in the document', () => {
  render(<Support />)

  const support = screen.getByTestId('support')

  expect(support).toBeInTheDocument()
})

test('Support includes heading and unordered list', () => {
  render(<Support />)

  const support = screen.getByTestId('support')
  const heading = screen.getByText('Support')
  const unorderedList = screen.getByTestId('unordered-list')
  const links = screen.queryAllByTestId('unordered-list-child')

  expect(support).toContainElement(heading)
  expect(support).toContainElement(unorderedList)
  expect(links).toHaveLength(4)
})
