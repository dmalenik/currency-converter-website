import React from 'react'
import { render, screen } from '@testing-library/react'
import { CompanyInfo } from '../components'

test('CompanyInfo renders in the document', () => {
  render(<CompanyInfo />)

  const companyInfo = screen.getByTestId('company-info')

  expect(companyInfo).toBeInTheDocument()
})

test('CompanyInfo contains unordered list and copyright', () => {
  render(<CompanyInfo />)

  const companyInfo = screen.getByTestId('company-info')
  const ul = screen.getByTestId('unordered-list')
  const copyright = screen.getByTestId('copyright')

  expect(companyInfo).toContainElement(ul)
  expect(companyInfo).toContainElement(copyright)
})
