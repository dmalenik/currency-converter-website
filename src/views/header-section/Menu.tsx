import React from 'react'
import { Link, UnorderedList } from '../../components'
import { CiMenuBurger } from 'react-icons/ci'
import { Language } from './Language'

export const Menu = () => {
  return (
    <nav>
      <UnorderedList>
        <Link description={'Send money'} ariaLabel='send money' />
        <Link description={'Track a transfer'} ariaLabel='track transfer' />
        <CiMenuBurger />
        <Language />
        <Link description={'Register'} ariaLabel='register' />
        <Link description={'Log In'} ariaLabel='log in' />
      </UnorderedList>
    </nav>
  )
}
