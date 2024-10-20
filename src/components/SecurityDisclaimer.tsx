import React from 'react'

import { type SecurityDisclaimerProps } from '../types'

export const SecurityDisclaimer = (props: SecurityDisclaimerProps) => {
  return (
    <div>
      {props.icon}
      <p>{props.description}</p>
    </div>
  )
}
