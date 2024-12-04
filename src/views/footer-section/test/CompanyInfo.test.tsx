import React from 'react'
import { render, screen } from '@testing-library/react'
import { CompanyInfo } from '../components'
import { UnorderedList, Link } from '../../../components'

test('CompanyInfo renders in the document', () => {
  render(<CompanyInfo />)

  const companyInfo = screen.getByTestId('company-info')

  expect(companyInfo).toBeInTheDocument()
})

test('CompanyInfo contains unordered list and copyright', () => {
  render(<CompanyInfo />)

  const companyInfo = screen.getByTestId('company-info')
  const copyright = screen.getByTestId('copyright')

  expect(companyInfo).toContainElement(copyright)
})

test('unordered list renders in the document', () => {
  render(
    <UnorderedList>
      <Link
        description={'Investore relations'}
        ariaLabel='investor relations'
      />
      <Link description={'Careers'} ariaLabel='careers' />
      <Link
        description={'Western Union Foundation'}
        ariaLabel='Western Union Foundation'
      />
      <Link
        description={'Intellectual property'}
        ariaLabel='intellectual property'
      />
      <Link description={'Help'} ariaLabel='help' />
      <Link description={'Cookie information'} ariaLabel='cookies' />
      <Link
        description={'Online Privacy Statement'}
        ariaLabel='online privacy statement'
      />
      <Link description={'Terms of service'} ariaLabel='terms of service' />
    </UnorderedList>,
  )

  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.getAllByTestId('unordered-list-child')

  expect(unorderedList).toBeInTheDocument()
  expect(unorderedListChildren).toHaveLength(8)
})
