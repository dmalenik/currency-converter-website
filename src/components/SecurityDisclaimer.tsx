import React, {ReactNode} from 'react'

export type SecurityDisclaimerProps = {
  icon?: ReactNode
  description: string
}

export const SecurityDisclaimer = ({
  icon,
  description,
}: SecurityDisclaimerProps) => {
  return (
    <div data-testid='security-disclaimer'>
      {icon ? (
        <div data-testid='security-disclaimer-icon'>{icon}</div>
      ) : undefined}
      <p data-testid='security-disclaimer-paragraph'>{description}</p>
    </div>
  )
}
