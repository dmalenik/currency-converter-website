import React from 'react'
import { render, screen } from '@testing-library/react'
import { SendMoney } from './SendMoney'

test('SendMoney renders in the document', () => {
  render(<SendMoney />)

  const sendMoney = screen.getByTestId('send-money')

  expect(sendMoney).toBeInTheDocument()
})

test('SendMoney contains heading and Action', () => {
  render(<SendMoney />)

  const sendMoney = screen.getByTestId('send-money')
  const heading = screen.getByText(
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
  )
  const action = screen.getByTestId('action')

  expect(sendMoney).toContainElement(heading)
  expect(sendMoney).toContainElement(action)
})
