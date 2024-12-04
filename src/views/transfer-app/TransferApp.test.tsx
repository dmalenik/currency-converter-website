import React from 'react'
import { render, screen } from '@testing-library/react'
import { TransferApp } from './TransferApp'

test('TransferApp renders in the document', () => {
  render(<TransferApp />)

  const transferApp = screen.getByTestId('transfer-app')

  expect(transferApp).toBeInTheDocument()
})

test('TransferApp includes app and banner', () => {
  render(<TransferApp />)

  const transferApp = screen.getByTestId('transfer-app')
  const app = screen.getByTestId('transfer-app-section')
  const banner = screen.getByTestId('transfer-app-banner')

  expect(transferApp).toContainElement(app)
  expect(transferApp).toContainElement(banner)
})
