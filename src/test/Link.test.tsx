import React from 'react'
import { render, screen } from '@testing-library/react'
import { Link } from '../components'

test('link renders to document', () => {
  render(<Link ariaLabel='link text' />)

  const link = screen.getByRole('button')

  expect(link).toBeInTheDocument()
})

test('link has ariaLabel attribute', () => {
  render(<Link ariaLabel='aria label attribute' />)

  const link = screen.getByRole('button')

  expect(link).toHaveAttribute('aria-label', 'aria label attribute')
})
