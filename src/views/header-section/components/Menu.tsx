import React from 'react'
import { Link, UnorderedList } from '../../../components'
import { CiMenuBurger } from 'react-icons/ci'
import { Language } from './Language'

export const Menu = () => {
  return (
    <nav>
      <UnorderedList>
        <Link description={'Send money'} ariaLabel='Send money' />
        <Link description={'Track a transfer'} ariaLabel='Track transfer' />
        <CiMenuBurger />
        <Language />
        <Link description={'Register'} ariaLabel='Register' />
        <Link description={'Log In'} ariaLabel='Log in' />
      </UnorderedList>
    </nav>
  )
}
