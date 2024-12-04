import React from 'react'
import { render, screen } from '@testing-library/react'
import { Register } from './Register'
import { UnorderedList, Card } from '../../components'

test('Register renders to the document', () => {
  render(<Register />)

  const register = screen.getByTestId('register')

  expect(register).toBeInTheDocument()
})

test('Register contains UnorderedList', () => {
  render(<Register />)

  const register = screen.getByTestId('register')
  const heading = screen.getByTestId('heading')
  const action = screen.getByTestId('action')
  const unorderedList = screen.getByTestId('unordered-list')

  expect(register).toContainElement(heading)
  expect(register).toContainElement(action)
  expect(register).toContainElement(unorderedList)
})

test('UnorderedList contains Card components of length 4', () => {
  render(
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
    </UnorderedList>,
  )

  const cards = screen.queryAllByTestId('card')

  expect(cards).toHaveLength(4)
})
