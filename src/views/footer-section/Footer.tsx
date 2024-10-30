import React from 'react'
import { FooterMenu } from './FooterMenu'
import { ServiceInfo } from './ServiceInfo'
import { CompanyAddress } from './CompanyAddress'

export const Footer = () => {
  return (
    <footer>
      <FooterMenu />
      <hr />
      <ServiceInfo />
      <hr />
      <CompanyAddress />
    </footer>
  )
}
