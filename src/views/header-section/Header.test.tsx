import React from 'react'
import { screen, render } from '@testing-library/react'
import { Header } from './Header'

test('Header renders in the document', () => {
  render(<Header />)

  const header = screen.getByTestId('header')

  expect(header).toBeInTheDocument()
})

test('Header contains Language and Menu', () => {
  render(<Header />)

  const header = screen.getByTestId('header')
  const language = screen.getByTestId('language')
  const menu = screen.getByTestId('menu')

  expect(header).toContainElement(language)
  expect(header).toContainElement(menu)
})
