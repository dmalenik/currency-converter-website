import React from 'react'
import { UnorderedList, Link } from '../../components'
import { Copyright } from './Copyright'

export const CompanyInfo = () => {
  return (
    <div>
      <UnorderedList>
        <Link description={'Investore relations'} />
        <Link description={'Careers'} />
        <Link description={'Western Union Foundation'} />
        <Link description={'Intellectual property'} />
        <Link description={'Help'} />
        <Link description={'Cookie information'} />
        <Link description={'Online Privacy Statement'} />
        <Link description={'Terms of service'} />
      </UnorderedList>
      <Copyright />
    </div>
  )
}
