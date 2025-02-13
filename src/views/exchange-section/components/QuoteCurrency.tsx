import React from 'react'
import { GiEgyptianSphinx } from 'react-icons/gi'
import { FaFlagUsa, FaLandmarkFlag } from 'react-icons/fa6'
import { Link, Search } from '../../../components'

export const QuoteCurrency = () => {
  return (
    <div data-testid='quote-currency'>
      <div>
        <label htmlFor='receive'>Receiver gets</label>
        <input type='number' id='receive' data-testid='quote-currency-field' />
      </div>
      <Search
        items={[
          <Link
            icon={<GiEgyptianSphinx />}
            description={'EGP'}
            ariaLabel='EGP'
          />,
          <Link icon={<FaFlagUsa />} description={'USD'} ariaLabel='USD' />,
          <Link
            icon={<FaLandmarkFlag />}
            description={'UAH'}
            ariaLabel='UAH'
          />,
        ]}
      />
    </div>
  )
}
