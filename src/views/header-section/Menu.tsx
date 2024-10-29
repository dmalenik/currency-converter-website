import React from 'react'
import { Link, UnorderedList } from '../../components'
import { CiMenuBurger } from 'react-icons/ci'
import { Language } from './Language'

export const Menu = () => {
  return (
    <nav>
      <UnorderedList>
        <Link description={'Send money'} />
        <Link description={'Track a transfer'} />
        <CiMenuBurger />
        <Language />
        <Link description={'Register'} />
        <Link description={'Log In'} />
      </UnorderedList>
    </nav>
  )
}
