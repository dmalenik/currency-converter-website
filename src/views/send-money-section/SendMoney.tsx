import React from 'react'
import { Heading, Action } from '../../components'

// TODO: replace Heading component with heading tag

export const SendMoney = () => {
  return (
    <section data-testid='send-money'>
      <Heading
        title={'Lorem ipsum dolor sit amet consectetur adipisicing.'}
        level={3}
      />
      <Action action={'Send money'} />
    </section>
  )
}
