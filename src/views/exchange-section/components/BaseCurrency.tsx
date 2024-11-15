import React from 'react'
import { SiQatarairways } from 'react-icons/si'

export const BaseCurrency = () => {
  return (
    <div data-testid='base-currency'>
      <div data-testid='base-currency-field'>
        <label htmlFor='send'>Send Amount</label>
        <input type='number' id='send' />
      </div>
      <div data-testid='base-currency-label'>
        <SiQatarairways />
        <p>QAR</p>
      </div>
    </div>
  )
}
