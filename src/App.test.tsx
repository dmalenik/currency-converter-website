import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'


test('renders app', () => {
  render(<App />)
  // TODO: app is presented in the document
  const app = screen.getByTestId('app')
  expect(app).toBeInTheDocument()
  // TODO: app includes header section
  // TODO: app includes main section
  // TODO: app includes footer section
})
