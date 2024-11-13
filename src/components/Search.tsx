import React, { ReactNode } from 'react'
import { FaArrowDown, FaSearch } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

import { type SearchProps } from '../types'

export const Search = ({ items }: SearchProps) => {
  // TODO: set base state for Link component below
  return (
    <div data-testid='search'>
      <div data-testid='search-result'>
        <div data-testid='search-result-item'>{items[0]}</div>
        <div data-testid='search-icon'>
          <FaArrowDown />
        </div>
      </div>
      <div data-testid='search-section'>
        <div data-testid='search-controller'>
          <label htmlFor='search-field' data-testid='search-label'>
            <FaSearch />
          </label>
          <input
            type='search'
            id='search-field'
            placeholder='Search'
            data-testid='search-input'
          />
        </div>
        <ul data-testid='search-list'>
          {items.map((i: ReactNode) => (
            <li key={uuidv4()} data-testid='search-item'>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
