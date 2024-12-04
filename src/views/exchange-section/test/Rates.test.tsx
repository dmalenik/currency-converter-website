import React from 'react'
import { render, screen } from '@testing-library/react'
import { Rates } from '../components'

test('Rates renders in the document', () => {
  render(<Rates />)

  const rates = screen.getByTestId('currency-info')

  expect(rates).toBeInTheDocument()
})

test('Rates contains rate, fee, and currency-info-reference elements', () => {
  render(<Rates />)

  const rates = screen.getByTestId('currency-info')
  const rate = screen.getByTestId('rate')
  const fee = screen.getByTestId('fee')
  const reference = screen.getByTestId('currency-info-reference')

  expect(rates).toContainElement(rate)
  expect(rates).toContainElement(fee)
  expect(rates).toContainElement(reference)
})
