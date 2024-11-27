import React from 'react'
import { render, screen } from '@testing-library/react'
import { Legal } from '../components'
import { UnorderedList, Link } from '../../../components'

test('Legal is in the document', () => {
  render(<Legal />)

  const legal = screen.getByTestId('legal')

  expect(legal).toBeInTheDocument()
})

test('Legal contains heading and UnorderedList', () => {
  render(<Legal />)

  const legal = screen.getByTestId('legal')
  const heading = screen.getByTestId('heading')

  expect(legal).toContainElement(heading)
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
    </UnorderedList>,
  )

  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.getAllByTestId('unordered-list-child')

  expect(unorderedList).toBeInTheDocument()
  expect(unorderedListChildren).toHaveLength(5)
})
