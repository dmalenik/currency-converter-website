import React from 'react'
import { GiEgyptianSphinx } from 'react-icons/gi'
import { FaArrowDown } from 'react-icons/fa6'
import { CurrencySearchList } from './CurrencySearchList'

export const QuoteCurrency = () => {
  return (
    <div>
      <div>
        <label htmlFor='receive'>Receiver gets</label>
        <input type='number' id='receive' />
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
