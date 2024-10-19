import React from 'react'
import { Link } from '../../components'
import { CiMenuBurger } from 'react-icons/ci'
import { Language } from './Language'

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link text={'Send money'} />
        </li>
        <li>
          <Link text={'Track a transfer'} />
        </li>
        <li>
          <CiMenuBurger />
        </li>
        <li>
          <Language />
        </li>
        <li>
          <Link text={'Register'} />
        </li>
        <li>
          <Link text={'Log In'} />
        </li>
      </ul>
    </nav>
  )
}
