import React from 'react'
import { Logo } from '../../components'
import { Menu } from './components/Menu'

export const Header = () => {
  return (
    <header data-testid='header'>
      <Logo />
      <Menu />
    </header>
  )
}
