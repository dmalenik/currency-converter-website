import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

test('Footer renders in the document', () => {
  render(<Footer />)

  const footer = screen.getByTestId('footer')

  expect(footer).toBeInTheDocument()
})

test('Footer contains FooterMenu, CompanyInfo, and CompanyAddress components', () => {
  render(<Footer />)

  const footer = screen.getByTestId('footer')
  const footerMenu = screen.getByTestId('footer-menu')
  const companyInfo = screen.getByTestId('company-info')
  const companyAddress = screen.getByTestId('company-address')

  expect(footer).toContainElement(footerMenu)
  expect(footer).toContainElement(companyInfo)
  expect(footer).toContainElement(companyAddress)
})
