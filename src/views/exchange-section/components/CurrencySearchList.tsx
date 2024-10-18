import React from 'react'
import { GiEgyptianSphinx } from 'react-icons/gi'
import { FaFlagUsa, FaLandmarkFlag } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'

export const CurrencySearchList = () => {
  return (
    <div className='currency-list'>
      <div>
        <label htmlFor='currency-search'>
          <FaSearch />
        </label>
        <input type='search' id='currency-search' placeholder='Search' />
      </div>
      <ul>
        <li>
          <div>
            <GiEgyptianSphinx />
            <p>EGP</p>
          </div>
        </li>
        <li>
          <div>
            <FaFlagUsa />
            <p>USD</p>
          </div>
        </li>
        <li>
          <div>
            <FaLandmarkFlag />
            <p>UAH</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
