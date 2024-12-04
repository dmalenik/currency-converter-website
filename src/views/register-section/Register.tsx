import React from 'react'
import { UnorderedList, Action, Card } from '../../components'

export const Register = () => {
  return (
    <section data-testid='register'>
      <h4>Register to start sending money today</h4>
      <Action action={'Register now'} />
      <UnorderedList>
        <Card
          title={'Quick and easy registration'}
          description={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natuscorrupti tempore nobis quis!'
          }
        />
        <Card
          title={'Pay the way you like'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasquasi blanditiis voluptatibus libero consequuntur quod.'
          }
        />
        <Card
          title={'Track your transfer'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitisdolorem quidem velit.'
          }
        />
        <Card
          title={'Convenient locations'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepefacilis, delectus sunt natus earum mollitia dolore beatae optioincidunt rerum laborum similique reprehenderit accusamusrepellat?'
          }
        />
      </UnorderedList>
    </section>
  )
}
