import React from 'react'
import { render, screen } from '@testing-library/react'
import { CompanyAddress } from '../components'

test('CompanyAddress renders in the document', () => {
  render(<CompanyAddress />)

  const companyAddress = screen.getByTestId('company-address')

  expect(companyAddress).toBeInTheDocument()
})

test('CompanyAddress contains company-address-reference and logo', () => {
  render(<CompanyAddress />)

  const companyAddress = screen.getByTestId('company-address')
  const companyAddressReference = screen.getByTestId(
    'company-address-reference',
  )
  const logo = screen.getByTestId('logo')

  expect(companyAddress).toContainElement(companyAddressReference)
  expect(companyAddress).toContainElement(logo)
})
