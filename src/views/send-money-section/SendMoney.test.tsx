import React from 'react'
import { render, screen } from '@testing-library/react'
import { SendMoney } from './SendMoney'

test('SendMoney renders in the document', () => {
  render(<SendMoney />)

  const sendMoney = screen.getByTestId('send-money')

  expect(sendMoney).toBeInTheDocument()
})

test('SendMoney contains Heading and Action', () => {
  render(<SendMoney />)

  const sendMoney = screen.getByTestId('send-money')
  const heading = screen.getByTestId('heading')
  const action = screen.getByTestId('action')

  expect(sendMoney).toContainElement(heading)
  expect(sendMoney).toContainElement(action)
})
