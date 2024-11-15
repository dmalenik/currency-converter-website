import React from 'react'
import { render, screen } from '@testing-library/react'
import { Copyright } from '../components'

test('Copyright renders in the document', () => {
  render(<Copyright />)

  const copyright = screen.getByTestId('copyright')

  expect(copyright).toBeInTheDocument()
})

test('Copyright contains copyright-company and copyright-rights', () => {
  render(<Copyright />)

  const copyright = screen.getByTestId('copyright')
  const copyrightCompany = screen.getByTestId('copyright-company')
  const copyrightRights = screen.getByTestId('copyright-rights')

  expect(copyright).toContainElement(copyrightCompany)
  expect(copyright).toContainElement(copyrightRights)
})
