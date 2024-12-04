import React from 'react'
import { render, screen } from '@testing-library/react'
import { QuickLinks } from '../components'

test('QuickLinks renders in the document', () => {
  render(<QuickLinks />)

  const quickLinks = screen.getByTestId('quick-links')

  expect(quickLinks).toBeInTheDocument()
})

test('QuickLinks includes unordered list', () => {
  render(<QuickLinks />)

  const quickLinks = screen.getByTestId('quick-links')
  const unorderedList = screen.getByTestId('unordered-list')
  const links = screen.queryAllByTestId('link')

  expect(quickLinks).toContainElement(unorderedList)
  expect(links).toHaveLength(6)
})
