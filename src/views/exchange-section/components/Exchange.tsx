import React from 'react'
import { BaseCurrency } from './BaseCurrency'
import { LiaExchangeAltSolid } from 'react-icons/lia'
import { QuoteCurrency } from './QuoteCurrency'
import { Rates } from './Rates'
import { Action } from '../../../components'

export const Exchange = () => {
  return (
    <form action='' data-testid='exchange'>
      <div data-testid='transaction'>
        <BaseCurrency />
        <LiaExchangeAltSolid />
        <QuoteCurrency />
      </div>
      <Rates />
      <Action action={'Send money'} />
    </form>
  )
}
