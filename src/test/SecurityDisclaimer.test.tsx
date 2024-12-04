import React from 'react'
import { render, screen } from '@testing-library/react'
import { SecurityDisclaimer } from '../components'
import { FaUnlockAlt } from 'react-icons/fa'

test('SecurityDisclaimer renders in the document', () => {
  render(
    <SecurityDisclaimer
      icon={<FaUnlockAlt />}
      description={'We encrypt your transfers.'}
    />,
  )

  const disclaimer = screen.getByTestId('security-disclaimer')

  expect(disclaimer).toBeInTheDocument()
})

test('SecurityDisclaimer contains icon and paragraph', () => {
  render(
    <SecurityDisclaimer
      icon={<FaUnlockAlt />}
      description={'We encrypt your transfers.'}
    />,
  )

  const disclaimer = screen.getByTestId('security-disclaimer')
  const paragraph = screen.getByTestId('security-disclaimer-paragraph')

  expect(disclaimer).toContainElement(paragraph)
})
