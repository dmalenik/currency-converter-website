import React from 'react'
import { render, screen } from '@testing-library/react'
import { QuickLinks } from '../components'
import { UnorderedList, Link } from '../../../components'

test('QuickLinks renders in the document', () => {
  render(<QuickLinks />)

  const quickLinks = screen.getByTestId('quick-links')

  expect(quickLinks).toBeInTheDocument()
})

test('QuickLinks includes heading and unordered list', () => {
  render(<QuickLinks />)

  const quickLinks = screen.getByTestId('quick-links')
  const heading = screen.getByText('Quick links')

  expect(quickLinks).toContainElement(heading)
})

test('unordered list renders in the document', () => {
  render(
    <UnorderedList>
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
    </UnorderedList>,
  )

  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.getAllByTestId('unordered-list-child')

  expect(unorderedList).toBeInTheDocument()
  expect(unorderedListChildren).toHaveLength(6)
})
