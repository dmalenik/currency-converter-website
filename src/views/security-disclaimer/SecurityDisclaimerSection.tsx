import React from 'react'
import { FaUnlockAlt } from 'react-icons/fa'
import { FaListCheck } from 'react-icons/fa6'
import { SecurityDisclaimer } from '../../components'

export const SecurityDisclaimerSection = () => {
  return (
    <div data-testid='security-disclaimer-section'>
      <SecurityDisclaimer
        icon={<FaUnlockAlt />}
        description={'We encrypt your transfers.'}
      />
      <SecurityDisclaimer
        icon={<FaListCheck />}
        description={'We are committed to keeping your data secure.'}
      />
    </div>
  )
}
