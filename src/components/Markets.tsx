import React from 'react'
import { Link } from './Link'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

export const Markets = () => {
  return (
    <div data-testid='markets'>
      <Link icon={<FaApple />} ariaLabel={'Download app in App Store'} />
      <Link
        icon={<FaGooglePlay />}
        ariaLabel={'Download app in Google Play Store'}
      />
    </div>
  )
}
