import React from 'react'
import { FooterMenu } from './FooterMenu'
import { CompanyInfo } from './CompanyInfo'
import { CompanyAddress } from './CompanyAddress'

export const Footer = () => {
  return (
    <footer data-testid="footer">
      <FooterMenu />
      <hr />
      <CompanyInfo />
      <hr />
      <CompanyAddress />
    </footer>
  )
}
