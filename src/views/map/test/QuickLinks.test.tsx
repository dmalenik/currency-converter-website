import React from 'react'
import { render, screen } from '@testing-library/react'
import { QuickLinks } from '../components'

test('QuickLinks renders in the document', () => {
  render(<QuickLinks />)

  const quickLinks = screen.getByTestId('quick-links')

  expect(quickLinks).toBeInTheDocument()
})

test('QuickLinks includes heading and unordered list', () => {
  render(<QuickLinks />)

  const quickLinks = screen.getByTestId('quick-links')
  const heading = screen.getByTestId('heading')
  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.getAllByTestId('unordered-list-child')

  expect(quickLinks).toContainElement(heading)
  expect(quickLinks).toContainElement(unorderedList)
  expect(unorderedListChildren).toHaveLength(6)
})
