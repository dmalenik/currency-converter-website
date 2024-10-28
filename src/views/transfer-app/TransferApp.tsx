import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { IoMdPhonePortrait } from 'react-icons/io'
import { Header, UnorderedList, Link, Card, Markets } from '../../components'
import { Rating } from './Rating'

export const TransferApp = () => {
  return (
    <section>
      <div className='app'>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos.</h2>
        <UnorderedList>
          <Card
            icon={<FaCheckCircle />}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quovitae inventore nulla sequi!'
            }
          />
          <Card
            icon={<FaCheckCircle />}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing.'}
          />
          <Card
            icon={<FaCheckCircle />}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing.'}
          />
        </UnorderedList>
        <Link description={'Download now'} />
        <div className='downloads'>
          <div className='rating'>
            <Rating rating={4} />
            <Rating rating={4} />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <Markets />
        </div>
      </div>
      <div className='banner'>
        <IoMdPhonePortrait />
      </div>
    </section>
  )
}
