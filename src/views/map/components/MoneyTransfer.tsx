import React from 'react'
import { Search, Link, UnorderedList, Heading } from '../../../components'
import { SiQatarairways } from 'react-icons/si'
import { GiGrainBundle } from 'react-icons/gi'
import { FaFlagUsa } from 'react-icons/fa6'

// TODO: replace Heading component with heading tag

export const MoneyTransfer = () => {
  return (
    <div data-testid='money-transfer'>
      <Search
        items={[
          <Link
            icon={<SiQatarairways />}
            description={'Qatar'}
            ariaLabel='Qatar'
          />,
          <Link
            icon={<GiGrainBundle />}
            description={'Ukraine'}
            ariaLabel='Ukraine'
          />,
          <Link icon={<FaFlagUsa />} description={'USA'} ariaLabel='USA' />,
        ]}
      />
      <section data-testid='money-transfer-section'>
        <Heading title={'Money transfer'} level={6} />
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
    </div>
  )
}
