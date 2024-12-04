import React from 'react'
import { render, screen } from '@testing-library/react'
import { Menu, Language } from '../components'
import { UnorderedList, Link } from '../../../components'
import { CiMenuBurger } from 'react-icons/ci'

test('Menu renders in the document', () => {
  render(<Menu />)

  const menu = screen.getByTestId('menu')

  expect(menu).toBeInTheDocument()
})

test('unordered list renders in the document', () => {
  render(
    <UnorderedList>
      <Link description={'Send money'} ariaLabel='Send money' />
      <Link description={'Track a transfer'} ariaLabel='Track transfer' />
      <CiMenuBurger />
      <Language />
      <Link description={'Register'} ariaLabel='Register' />
      <Link description={'Log In'} ariaLabel='Log in' />
    </UnorderedList>,
  )

  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.queryAllByTestId('unordered-list-child')

  expect(unorderedList).toBeInTheDocument()
  expect(unorderedListChildren).toHaveLength(6)
})
