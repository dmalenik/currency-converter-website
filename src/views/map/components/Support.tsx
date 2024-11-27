import React from 'react'
import { Link, UnorderedList, Heading } from '../../../components'

export const Support = () => {
  return (
    <section data-testid='support'>
      <Heading title={'Support'} level={6} />
      <UnorderedList>
        <Link
          description={'Lorem ipsum dolor sit amet.'}
          ariaLabel='lorem ipsum'
        />
        <Link
          description={'Lorem ipsum dolor sit amet.'}
          ariaLabel='lorem ipsum'
        />
        <Link
          description={'Lorem ipsum dolor sit amet.'}
          ariaLabel='lorem ipsum'
        />
        <Link
          description={'Lorem ipsum dolor sit amet.'}
          ariaLabel='lorem ipsum'
        />
      </UnorderedList>
    </section>
  )
}
