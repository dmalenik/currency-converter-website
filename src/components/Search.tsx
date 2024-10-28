import React from 'react'
import { Card } from './Card'
import { FaArrowDown } from 'react-icons/fa'
import { SearchList } from './SearchList'

import { type SearchProps } from '../types'

export const Search = (props: SearchProps) => {
  return (
    <div>
      {/** TODO: set base state for searching */}
      <Card
        icon={props.items[0].icon}
        description={props.items[0].description}
      />
      <FaArrowDown />
      <SearchList items={props.items} />
    </div>
  )
}
