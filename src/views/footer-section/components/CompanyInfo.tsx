import React from 'react'
import { UnorderedList, Link } from '../../../components'
import { Copyright } from './Copyright'

export const CompanyInfo = () => {
  return (
    <div>
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
      </UnorderedList>
      <Copyright />
    </div>
  )
}
