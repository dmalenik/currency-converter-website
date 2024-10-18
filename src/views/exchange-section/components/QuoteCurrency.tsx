import React from 'react'
import { GiEgyptianSphinx } from 'react-icons/gi'
import { FaArrowDown } from 'react-icons/fa6'
import { CurrencySearchList } from './CurrencySearchList'

export const QuoteCurrency = () => {
  return (
    <div>
      <div>
        <label htmlFor='send'>Receiver gets</label>
        <input type='number' id='send' />
      </div>
      <div>
        <GiEgyptianSphinx />
        <p>EGP</p>
        <FaArrowDown />
        <CurrencySearchList />
      </div>
    </div>
  )
}
