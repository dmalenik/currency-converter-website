import React from 'react'
import { FooterMenu, CompanyInfo, CompanyAddress } from './components'

export const Footer = () => {
  return (
    <footer data-testid='footer'>
      <FooterMenu />
      <hr />
      <CompanyInfo />
      <hr />
      <CompanyAddress />
    </footer>
  )
}
