import React from 'react'
import { render, screen } from '@testing-library/react'
import { TransferApp } from './TransferApp'

test('TransferApp renders in the document', () => {
  render(<TransferApp />)

  const transferApp = screen.getByTestId('transfer-app')

  expect(transferApp).toBeInTheDocument()
})

test('TransferApp includes download now button, downloads section and banner', () => {
  render(<TransferApp />)

  const transferApp = screen.getByTestId('transfer-app')
  const link = screen.getByText('Download now')
  const downloads = screen.getByTestId('downloads')
  const banner = screen.getByTestId('transfer-app-banner')

  expect(transferApp).toContainElement(link)
  expect(transferApp).toContainElement(downloads)
  expect(transferApp).toContainElement(banner)
})
