import React from 'react'
import { render, screen } from '@testing-library/react'
import { MoneyTransfer } from '../components'

test('MoneyTransfer renders in the document', () => {
  render(<MoneyTransfer />)

  const moneyTransfer = screen.getByTestId('money-transfer')

  expect(moneyTransfer).toBeInTheDocument()
})

test('MoneyTransfer includes Search and money transfer section', () => {
  render(<MoneyTransfer />)

  const moneyTransfer = screen.getByTestId('money-transfer')
  const search = screen.getByTestId('search')
  const moneyTransferSection = screen.getByTestId('money-transfer-section')

  expect(moneyTransfer).toContainElement(search)
  expect(moneyTransfer).toContainElement(moneyTransferSection)
})

test('money transfer section includes heading and unordered list', () => {
  render(<MoneyTransfer />)

  const moneyTransferSection = screen.getByTestId('money-transfer-section')
  const moneyTransferSectionHeading = screen.getByTestId('heading')
  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.getAllByTestId('unordered-list-child')

  expect(moneyTransferSection).toContainElement(moneyTransferSectionHeading)
  expect(moneyTransferSection).toContainElement(unorderedList)
  expect(unorderedListChildren).toHaveLength(6)
})
