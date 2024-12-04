import React from 'react'
import { render, screen } from '@testing-library/react'
import { SecurityDisclaimerSection } from './SecurityDisclaimerSection'

test('SecurityDisclaimerSection renders in the document', () => {
  render(<SecurityDisclaimerSection />)

  const securityDisclaimerSection = screen.getByTestId(
    'security-disclaimer-section',
  )

  expect(securityDisclaimerSection).toBeInTheDocument()
})

test('SecurityDisclaimerSection contains two SecurityDisclaimer elements', () => {
  render(<SecurityDisclaimerSection />)

  const securityDisclaimer = screen.queryAllByTestId('security-disclaimer')

  expect(securityDisclaimer).toHaveLength(2)
})
