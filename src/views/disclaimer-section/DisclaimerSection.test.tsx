import React from 'react'
import { render, screen } from '@testing-library/react'
import { DisclaimerSection } from './DisclaimerSection'

test('DisclaimerSection renders in the document', () => {
  render(<DisclaimerSection />)

  const disclaimer = screen.getByTestId('disclaimer-section')

  expect(disclaimer).toBeInTheDocument()
})

test('DisclaimerSection contains a paragraph', () => {
  render(<DisclaimerSection />)

  const disclaimer = screen.getByTestId('disclaimer-section')
  const p = screen.getByTestId('paragraph')

  expect(disclaimer).toContainElement(p)
})
