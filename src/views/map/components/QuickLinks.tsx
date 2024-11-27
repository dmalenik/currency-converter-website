import React from 'react'
import { Link, UnorderedList, Heading } from '../../../components'

export const QuickLinks = () => {
  return (
    <section data-testid='quick-links'>
      <Heading title={'Quick links'} level={6} />
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
        <Link
          description={'Lorem ipsum dolor sit amet.'}
          ariaLabel='lorem ipsum'
        />
      </UnorderedList>
    </section>
  )
}
