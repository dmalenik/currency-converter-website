import React from 'react'
import { Header, List, Action } from '../../components'
import { FaHeart, FaShieldAlt } from 'react-icons/fa'
import { LuClock4 } from 'react-icons/lu'
import { FaGlobe } from 'react-icons/fa6'

export const Transfer = () => {
  return (
    <section>
      <Header
        title={
          "Our customers made millons of transfers with Western Union last year. Here's why:"
        }
      />
      <List
        list={[
          {
            id: '0',
            icon: <FaHeart />,
            title: 'Ease and confidence',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velitcum ab repellendus doloribus fugiat mollitia.',
          },
          {
            id: '1',
            icon: <FaShieldAlt />,
            title: 'Commitment to security',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque magnam dolores.',
          },
          {
            id: '2',
            icon: <LuClock4 />,
            title: 'Spread and transparency',
            description:
              'Lorem ipsum dolor sit amet consectetur* adipisicing elit. Architecto assumenda totam tempore velit. Pariatur, nisi?',
          },
          {
            id: '3',
            icon: <FaGlobe />,
            title: 'Worldwide reach',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eligendi odit blanditiis saepe nobis optio vel laborumatque quos autem!',
          },
        ]}
      />
      <section>
        <Header title={'Register to start sending money today.'} />
        <Action action={'Register now'} />
        <List
          list={[
            {
              id: '0',
              listHeading: 'Quick and easy registration',
              description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natuscorrupti tempore nobis quis!',
            },
            {
              id: '1',
              listHeading: 'Pay the way you like',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasquasi blanditiis voluptatibus libero consequuntur quod.',
            },
            {
              id: '2',
              listHeading: 'Track your transfer',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitisdolorem quidem velit.',
            },
            {
              id: '3',
              listHeading: 'Convenient locations',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepefacilis, delectus sunt natus earum mollitia dolore beatae optioincidunt rerum laborum similique reprehenderit accusamusrepellat?',
            },
          ]}
        />
      </section>
      <section>
        <Header title={'Lorem ipsum dolor sit amet consectetur adipisicing.'} />
        <Action action={'Send money'} />
      </section>
    </section>
  )
}
