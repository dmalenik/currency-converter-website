import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Card } from './Card'

import { type SearchProps, type CardProps } from '../types'

export const SearchList = (props: SearchProps) => {
  return (
    <div className='container'>
      <div className='search'>
        <label htmlFor='search-field'>
          <FaSearch />
        </label>
        <input type='search' id='search-field' placeholder='Search' />
      </div>
      <ul>
        {props.items.map(({ icon, description }: CardProps) => (
          <li>
            <Card icon={icon} description={description} />
          </li>
        ))}
      </ul>
    </div>
  )
}
