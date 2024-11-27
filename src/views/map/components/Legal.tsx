import React from 'react'
import { Link, UnorderedList, Heading } from '../../../components'

export const Legal = () => {
  // TODO: replace Heading component with simple heading tag
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
