import React from 'react'
import { Heading, UnorderedList, Card } from '../../components'
import { FaHeart, FaShieldAlt } from 'react-icons/fa'
import { LuClock4 } from 'react-icons/lu'
import { FaGlobe } from 'react-icons/fa6'

export const Transfer = () => {
  return (
    <section>
      <Heading
        title={
          "Our customers made millons of transfers with Western Union last year. Here's why:"
        }
        level={3}
      />
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
      </UnorderedList>
    </section>
  )
}
