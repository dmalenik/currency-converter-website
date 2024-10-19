import React from 'react'
import { FaUnlockAlt } from 'react-icons/fa'
import { FaListCheck } from 'react-icons/fa6'
import { Disclaimer } from './Disclaimer'

export const SecurityDisclaimer = () => {
  return (
    <section>
      <Disclaimer
        icon={<FaUnlockAlt />}
        description={'We encrypt your transfers.'}
      />
      <Disclaimer
        icon={<FaListCheck />}
        description={'We are committed to keeping your data secure.'}
      />
    </section>
  )
}
