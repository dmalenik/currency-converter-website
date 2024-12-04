import React from 'react'
import { render, screen } from '@testing-library/react'
import { BaseCurrency } from '../components'

test('BaseCurrency renders in the document', () => {
  render(<BaseCurrency />)

  const baseCurrency = screen.getByTestId('base-currency')

  expect(baseCurrency).toBeInTheDocument()
})

test('BaseCurrency contains base-currency-field and base-currency-label', () => {
  render(<BaseCurrency />)

  const baseCurrency = screen.getByTestId('base-currency')
  const baseCurrencyField = screen.getByTestId('base-currency-field')
  const baseCurrencyLabel = screen.getByTestId('base-currency-label')

  expect(baseCurrency).toContainElement(baseCurrencyField)
  expect(baseCurrency).toContainElement(baseCurrencyLabel)
})
