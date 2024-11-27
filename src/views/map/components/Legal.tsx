import React from 'react'
import { Link, UnorderedList, Heading } from '../../../components'

// TODO: replace Heading component with simple heading tag

export const Legal = () => {
  return (
    <section data-testid='legal'>
      <Heading title={'Legal'} level={6} />
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
        <Link
          description={'Lorem ipsum dolor sit amet.'}
          ariaLabel='lorem ipsum'
        />
      </UnorderedList>
    </section>
  )
}
