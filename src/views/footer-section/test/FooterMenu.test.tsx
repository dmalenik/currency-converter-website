import React from 'react'
import { render, screen } from '@testing-library/react'
import { FooterMenu } from '../components'
import { UnorderedList, Link } from '../../../components'

test('FooterMenu renders in the document', () => {
  render(<FooterMenu />)

  const footerMenu = screen.getByTestId('footer-menu')

  expect(footerMenu).toBeInTheDocument()
})

test('unordered list renders in the document', () => {
  render(
    <UnorderedList>
      <Link description={'Home'} ariaLabel='home' />
      <Link description={'About us'} ariaLabel='about us' />
      <Link description={'Blog'} ariaLabel='blog' />
      <Link description={'Contact us'} ariaLabel='contact us' />
      <Link description={'Fraud awareness'} ariaLabel='fraud awareness' />
      <Link description={'Report a security bug'} ariaLabel='report a bug' />
    </UnorderedList>,
  )

  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.getAllByTestId('unordered-list-child')

  expect(unorderedList).toBeInTheDocument()
  expect(unorderedListChildren).toHaveLength(6)
})
