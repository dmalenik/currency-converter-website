import React, { ReactNode } from 'react'
import { FaArrowDown, FaSearch } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

import { type SearchProps } from '../types'

export const Search = (props: SearchProps) => {
  return (
    <div>
      {/** TODO: set base state for Link component below */}
      <div>
        {props.items[0]}
        <FaArrowDown />
      </div>
      <div className='container'>
        <div className='search'>
          <label htmlFor='search-field'>
            <FaSearch />
          </label>
          <input type='search' id='search-field' placeholder='Search' />
        </div>
        <ul>
          {props.items.map((i: ReactNode) => (
            <li key={uuidv4()}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
