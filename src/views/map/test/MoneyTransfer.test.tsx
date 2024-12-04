import React from 'react'
import { render, screen } from '@testing-library/react'
import { MoneyTransfer } from '../components'
import { UnorderedList, Link } from '../../../components'

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

  const section = screen.getByTestId('money-transfer-section')
  const heading = screen.getByText('Money transfer')

  expect(section).toContainElement(heading)
})

test('UnorderedList renders in the document', () => {
  render(
    <UnorderedList>
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
      <Link
        description={'Lorem ipsum dolor sit amet.'}
        ariaLabel='lorem ipsum'
      />
    </UnorderedList>,
  )

  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.getAllByTestId('unordered-list-child')

  expect(unorderedList).toBeInTheDocument()
  expect(unorderedListChildren).toHaveLength(6)
})
