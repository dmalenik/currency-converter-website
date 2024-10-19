import React from 'react'
import { Link } from '../../components'
import { CiMenuBurger } from 'react-icons/ci'
import { Language } from './Language'

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link description={'Send money'} />
        </li>
        <li>
          <Link description={'Track a transfer'} />
        </li>
        <li>
          <CiMenuBurger />
        </li>
        <li>
          <Language />
        </li>
        <li>
          <Link description={'Register'} />
        </li>
        <li>
          <Link description={'Log In'} />
        </li>
      </ul>
    </nav>
  )
}
