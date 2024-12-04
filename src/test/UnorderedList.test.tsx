import React from 'react'
import { render, screen } from '@testing-library/react'
import { UnorderedList, Link } from '../components'
import { CiMenuBurger } from 'react-icons/ci'

test('UnorderedList renders in the document', () => {
  render(
    <UnorderedList>
      <Link description={'Send money'} ariaLabel='Send money' />
      <Link description={'Track a transfer'} ariaLabel='Track transfer' />
      <CiMenuBurger />
      <Link description={'Register'} ariaLabel='Register' />
      <Link description={'Log In'} ariaLabel='Log in' />
    </UnorderedList>,
  )

  const ul = screen.getByTestId('unordered-list')

  expect(ul).toBeInTheDocument()
})

test('length of UnorderedList children equals to 5', () => {
  render(
    <UnorderedList>
      <Link description={'Send money'} ariaLabel='Send money' />
      <Link description={'Track a transfer'} ariaLabel='Track transfer' />
      <CiMenuBurger />
      <Link description={'Register'} ariaLabel='Register' />
      <Link description={'Log In'} ariaLabel='Log in' />
    </UnorderedList>,
  )

  const children = screen.queryAllByTestId('unordered-list-child')

  expect(children).toHaveLength(5)
})
