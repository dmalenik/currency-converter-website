import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

export const Copyright = () => {
  return (
    <div data-testid='copyright'>
      <div>
        <FaRegCopyright />
        <p data-testid='copyright-company'>2021 Western Union Holdings, Inc.</p>
      </div>
      <p data-testid='copyright-rights'>All Rights Reserved</p>
    </div>
  )
}
