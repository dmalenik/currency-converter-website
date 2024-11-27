import React from 'react'
import { render, screen } from '@testing-library/react'
import { Language } from '../components'

test('Language renders in the document', () => {
  render(<Language />)

  const language = screen.getByTestId('language')

  expect(language).toBeInTheDocument()
})

test('Language contains element EN', () => {
  render(<Language />)

  const language = screen.getByTestId('language')
  const EN = screen.getByTestId('en')

  expect(language).toContainElement(EN)
})
