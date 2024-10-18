import React from 'react'
import { MenuItem, Language } from './components'
import { CiMenuBurger } from 'react-icons/ci'

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <MenuItem text={'Send money'} />
        </li>
        <li>
          <MenuItem text={'Track a transfer'} />
        </li>
        <li>
          <CiMenuBurger />
        </li>
        <li>
          <Language />
        </li>
        <li>
          <MenuItem text={'Register'} />
        </li>
        <li>
          <MenuItem text={'Log In'} />
        </li>
      </ul>
    </nav>
  )
}
