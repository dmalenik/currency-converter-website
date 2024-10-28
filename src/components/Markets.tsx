import React from 'react'
import { Link } from './Link'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

export const Markets = () => {
  return (
    <div className='markets'>
      <Link description={<FaApple />} ariaLabel={'Download app in App Store'} />
      <Link
        description={<FaGooglePlay />}
        ariaLabel={'Download app in Google Play Store'}
      />
    </div>
  )
}
