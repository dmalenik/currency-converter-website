import React from 'react'
import { BaseCurrency } from './BaseCurrency'
import { LiaExchangeAltSolid } from 'react-icons/lia'
import { QuoteCurrency } from './QuoteCurrency'
import { Rates } from './Rates'

export const Exchange = () => {
  return (
    <form action=''>
      <div className='transaction'>
        <BaseCurrency/>
        <LiaExchangeAltSolid />
        <QuoteCurrency />
      </div>
      <Rates />
      <button type='button'>Send money</button>
    </form>
  )
}
