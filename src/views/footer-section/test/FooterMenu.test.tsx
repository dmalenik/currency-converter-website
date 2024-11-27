import React from 'react'
import { render, screen } from '@testing-library/react'
import { FooterMenu } from '../components'

test('FooterMenu renders in the document', () => {
  render(<FooterMenu />)

  const footerMenu = screen.getByTestId('footer-menu')

  expect(footerMenu).toBeInTheDocument()
})

test('FooterMenu contains an array of unordered lists with length equals to 2', () => {
  render(<FooterMenu />)

  const unorderedListArray = screen.queryAllByTestId('unordered-list')

  expect(unorderedListArray).toHaveLength(2)
})
