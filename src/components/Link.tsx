import React from 'react'

import { type MenuItemProps } from '../views/header/types'

export const Link = ({ text }: MenuItemProps) => {
  return (
    <button disabled type='button'>
      {text}
    </button>
  )
}
