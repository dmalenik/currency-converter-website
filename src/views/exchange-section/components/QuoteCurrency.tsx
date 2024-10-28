import React from 'react'
import { Search } from '../../../components'
import { GiEgyptianSphinx } from 'react-icons/gi'
import { FaFlagUsa, FaLandmarkFlag } from 'react-icons/fa6'

export const QuoteCurrency = () => {
  return (
    <div>
      <div>
        <label htmlFor='receive'>Receiver gets</label>
        <input type='number' id='receive' />
      </div>
      <Search
        items={[
          { icon: <GiEgyptianSphinx />, description: 'EGP' },
          { icon: <FaFlagUsa />, description: 'USD' },
          { icon: <FaLandmarkFlag />, description: 'UAH' },
        ]}
      />
    </div>
  )
}
