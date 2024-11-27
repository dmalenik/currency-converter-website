import React from 'react'
import { render, screen } from '@testing-library/react'
import { Support } from '../components'
import { UnorderedList, Link } from '../../../components'

test('QuickLinks renders in the document', () => {
  render(<Support />)

  const support = screen.getByTestId('support')

  expect(support).toBeInTheDocument()
})

test('QuickLinks includes heading and unordered list', () => {
  render(<Support />)

  const support = screen.getByTestId('support')
  const heading = screen.getByTestId('heading')

  expect(support).toContainElement(heading)
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
    </UnorderedList>,
  )

  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.getAllByTestId('unordered-list-child')

  expect(unorderedList).toBeInTheDocument()
  expect(unorderedListChildren).toHaveLength(4)
})
