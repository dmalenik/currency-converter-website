import React from 'react'
import { render, screen } from '@testing-library/react'
import { ExchangeSection } from './ExchangeSection'

test('ExchangeSection renders in the document', () => {
  render(<ExchangeSection />)

  const exchangeSection = screen.getByTestId('exchange-section')

  expect(exchangeSection).toBeInTheDocument()
})

test('ExchangeSection contains heading, exchange, footer elements', () => {
  render(<ExchangeSection />)

  const exchangeSection = screen.getByTestId('exchange-section')
  const heading = screen.getByText('Currency Converter')
  const exchange = screen.getByTestId('exchange')
  const footer = screen.getByTestId('exchange-section-footer')

  expect(exchangeSection).toContainElement(heading)
  expect(exchangeSection).toContainElement(exchange)
  expect(exchangeSection).toContainElement(footer)
})
