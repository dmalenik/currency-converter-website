import React from 'react'
import { render, screen } from '@testing-library/react'
import { QuoteCurrency } from '../components'

test('QuoteCurrency renders in the document', () => {
  render(<QuoteCurrency />)

  const quoteCurrency = screen.getByTestId('quote-currency')

  expect(quoteCurrency).toBeInTheDocument()
})

test('QuoteCurrency contains quote-currency-field and search elements', () => {
  render(<QuoteCurrency />)

  const quoteCurrency = screen.getByTestId('quote-currency')
  const quoteCurrencyField = screen.getByTestId('quote-currency-field')
  const search = screen.getByTestId('search')

  expect(quoteCurrency).toContainElement(quoteCurrencyField)
  expect(quoteCurrency).toContainElement(search)
})
