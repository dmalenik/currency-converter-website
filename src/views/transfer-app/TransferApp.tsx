import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { IoMdPhonePortrait } from 'react-icons/io'
import { UnorderedList, Link, Card, Markets } from '../../components'
import { Rating } from './components'

export const TransferApp = () => {
  return (
    <div data-testid='transfer-app'>
      <div className='transfer-app' data-testid='transfer-app-section'>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos.</h3>
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
        <Link description={'Download now'} ariaLabel='Download Now' />
        <div className='downloads' data-testid='downloads'>
          <div className='rating'>
            <Rating rating={4} />
            <Rating rating={4} />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <Markets />
        </div>
      </div>
      <div className='banner' data-testid='transfer-app-banner'>
        <IoMdPhonePortrait />
      </div>
    </div>
  )
}
