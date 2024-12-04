import React from 'react'
import { render, screen } from '@testing-library/react'
import { Exchange } from '../components'

test('Exchange renders in the document', () => {
  render(<Exchange />)

  const exchange = screen.getByTestId('exchange')

  expect(exchange).toBeInTheDocument()
})

test('Exchange contains transaction, currency-info, and button elements', () => {
  render(<Exchange />)

  const exchange = screen.getByTestId('exchange')
  const transaction = screen.getByTestId('transaction')
  const rates = screen.getByTestId('currency-info')
  const action = screen.getByTestId('action')
  const baseCurrency = screen.getByTestId('base-currency')
  const quoteCurrency = screen.getByTestId('quote-currency')

  expect(exchange).toContainElement(transaction)
  expect(exchange).toContainElement(rates)
  expect(exchange).toContainElement(action)
  expect(transaction).toContainElement(baseCurrency)
  expect(transaction).toContainElement(quoteCurrency)
})
