import React from 'react'
import { render, screen } from '@testing-library/react'
import { SendMoney } from './SendMoney'

test('SendMoney renders in the document', () => {
  render(<SendMoney />)

  const sendMoney = screen.getByTestId('send-money')

  expect(sendMoney).toBeInTheDocument()
})

test('SendMoney contains Action', () => {
  render(<SendMoney />)

  const sendMoney = screen.getByTestId('send-money')
  const action = screen.getByTestId('action')

  expect(sendMoney).toContainElement(action)
})
