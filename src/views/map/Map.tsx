import React from 'react'
import { GiEgyptianSphinx, GiSpain } from 'react-icons/gi'
import { Link, Markets, UnorderedList } from '../../components'
import { MoneyTransfer, Support, QuickLinks, Legal } from './components'

export const Map = () => {
  return (
    <div data-testid='map'>
      <div data-testid='map-support'>
        <MoneyTransfer />
        <Support />
        <QuickLinks />
        <Legal />
      </div>
      <div data-testid='map-countries'>
        <p data-testid='map-contries-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ad minima suscipit reiciendis aut hic minus recusandae!
        </p>
        <UnorderedList>
          <Link
            icon={<GiEgyptianSphinx />}
            description={'Egypt'}
            ariaLabel='lorem ipsum'
          />
          <Link
            icon={<GiSpain />}
            description={'Phillippines'}
            ariaLabel='lorem ipsum'
          />
          <Link
            icon={<GiEgyptianSphinx />}
            description={'India'}
            ariaLabel='lorem ipsum'
          />
          <Link
            icon={<GiEgyptianSphinx />}
            description={'Lebanon'}
            ariaLabel='lorem ipsum'
          />
          <Link
            icon={<GiEgyptianSphinx />}
            description={'Tunisia'}
            ariaLabel='lorem ipsum'
          />
        </UnorderedList>
        <Markets />
      </div>
    </div>
  )
}
