import React from 'react'
import { FaCheckCircle, FaApple, FaGooglePlay } from 'react-icons/fa'
import { IoMdPhonePortrait } from 'react-icons/io'
import { Header, List, Link } from '../../components'
import { Rating } from './Rating'

export const TransferApp = () => {
  return (
    <section>
      <div className='app'>
        <Header
          title={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos.'
          }
        />
        <List
          list={[
            {
              id: '1',
              icon: <FaCheckCircle />,
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quovitae inventore nulla sequi!',
            },
            {
              id: '2',
              icon: <FaCheckCircle />,
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing.',
            },
            {
              id: '3',
              icon: <FaCheckCircle />,
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing.',
            },
          ]}
        />
        <Link description={'Download now'} />
        <div className='downloads'>
          <div className='rating'>
            <Rating rating={4} />
            <Rating rating={4} />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className='markets'>
            <Link
              description={<FaApple />}
              ariaLabel={'Download app in App Store'}
            />
            <Link
              description={<FaGooglePlay />}
              ariaLabel={'Download app in Google Play Store'}
            />
          </div>
        </div>
      </div>
      <div className='banner'>
        <IoMdPhonePortrait />
      </div>
    </section>
  )
}
