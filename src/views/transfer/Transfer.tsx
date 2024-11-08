import React from 'react'
import { Heading, UnorderedList, Action, Card } from '../../components'
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
      <section>
        <Heading title={'Register to start sending money today.'} level={4} />
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
      <section>
        <Heading
          title={'Lorem ipsum dolor sit amet consectetur adipisicing.'}
          level={3}
        />
        <Action action={'Send money'} />
      </section>
    </section>
  )
}
