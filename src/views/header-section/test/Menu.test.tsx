import React from 'react'
import { render, screen } from '@testing-library/react'
import { Menu } from '../components'

test('Menu renders in the document', () => {
  render(<Menu />)

  const menu = screen.getByTestId('menu')

  expect(menu).toBeInTheDocument()
})

test('Menu contains UnorderedList', () => {
  render(<Menu />)

  const menu = screen.getByTestId('menu')
  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.queryAllByTestId('unordered-list-child')

  expect(menu).toContainElement(unorderedList)
  expect(unorderedListChildren).toHaveLength(6)
})
