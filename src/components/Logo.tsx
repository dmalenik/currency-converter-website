import React from 'react'
import { MdAnchor } from 'react-icons/md'

export const Logo = () => {
  return (
    <div data-testid='logo'>
      <div data-testid='icon'>
        <MdAnchor />
      </div>
      <p data-testid='text'>Logo</p>
    </div>
  )
}
