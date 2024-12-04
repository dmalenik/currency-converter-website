import React from 'react'
import { screen, render } from '@testing-library/react'
import { Transfer } from './Transfer'
import { UnorderedList, Card } from '../../components'
import { FaHeart, FaShieldAlt } from 'react-icons/fa'
import { LuClock4 } from 'react-icons/lu'
import { FaGlobe } from 'react-icons/fa6'

test('Transfer redners in the document', () => {
  render(<Transfer />)

  const transfer = screen.getByTestId('transfer')

  expect(transfer).toBeInTheDocument()
})

test('Transfer includes Heading and UnorderedList', () => {
  render(<Transfer />)

  const transfer = screen.getByTestId('transfer')
  const heading = screen.getByTestId('heading')
  const unorderedList = screen.getByTestId('unordered-list')

  expect(transfer).toContainElement(heading)
  expect(transfer).toContainElement(unorderedList)
})

test('UnorderedList has length of 4', () => {
  render(
    <UnorderedList>
      <Card
        icon={<FaHeart />}
        title={'Ease and confidence'}
        description={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velitcum ab repellendus doloribus fugiat mollitia.'
        }
      />
      <Card
        icon={<FaShieldAlt />}
        title={'Commitment to security'}
        description={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque magnam dolores.'
        }
      />
      <Card
        icon={<LuClock4 />}
        title={'Spread and transparency'}
        description={
          'Lorem ipsum dolor sit amet consectetur* adipisicing elit. Architecto assumenda totam tempore velit. Pariatur, nisi?'
        }
      />
      <Card
        icon={<FaGlobe />}
        title={'Worldwide reach'}
        description={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eligendi odit blanditiis saepe nobis optio vel laborumatque quos autem!'
        }
      />
    </UnorderedList>,
  )

  const cards = screen.queryAllByTestId('card')

  expect(cards).toHaveLength(4)
})
