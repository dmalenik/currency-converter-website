import React from 'react'
import { Link, UnorderedList } from '../../../components'

export const Support = () => {
  return (
    <section data-testid='support'>
      <h6>Support</h6>
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
