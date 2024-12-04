import React from 'react'
import { SiQatarairways } from 'react-icons/si'

export const BaseCurrency = () => {
  return (
    <div data-testid='base-currency'>
      <div>
        <label htmlFor='send'>Send Amount</label>
        <input type='number' id='send' data-testid='base-currency-field' />
      </div>
      <div>
        <SiQatarairways />
        <p data-testid='base-currency-label'>QAR</p>
      </div>
    </div>
  )
}
