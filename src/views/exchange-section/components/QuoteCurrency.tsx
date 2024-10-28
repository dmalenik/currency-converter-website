import React from 'react'
import { GiEgyptianSphinx } from 'react-icons/gi'
import { FaFlagUsa, FaLandmarkFlag } from 'react-icons/fa6'
import { Link, Search } from '../../../components'

export const QuoteCurrency = () => {
  return (
    <div>
      <div>
        <label htmlFor='receive'>Receiver gets</label>
        <input type='number' id='receive' />
      </div>
      <Search
        items={[
          <Link icon={<GiEgyptianSphinx />} description={'EGP'} />,
          <Link icon={<FaFlagUsa />} description={'USD'} />,
          <Link icon={<FaLandmarkFlag />} description={'UAH'} />,
        ]}
      />
    </div>
  )
}
