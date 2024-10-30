import React from 'react'
import { SiQatarairways } from 'react-icons/si'

export const BaseCurrency = () => {
  return (
    <div>
      <div>
        <label htmlFor='send'>Send Amount</label>
        <input type='number' id='send' />
      </div>
      <div>
        <SiQatarairways />
        <p>QAR</p>
      </div>
    </div>
  )
}
