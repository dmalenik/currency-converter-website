import React from 'react'
import { SiQatarairways } from 'react-icons/si'
import { GiGrainBundle, GiEgyptianSphinx, GiSpain } from 'react-icons/gi'
import { FaFlagUsa } from 'react-icons/fa6'
import { Search, Link, Markets, UnorderedList, Header } from '../../components'

export const Map = () => {
  return (
    <section>
      <div>
        <Search
          items={[
            <Link icon={<SiQatarairways />} description={'Qatar'} />,
            <Link icon={<GiGrainBundle />} description={'Ukraine'} />,
            <Link icon={<FaFlagUsa />} description={'USA'} />,
          ]}
        />
        <section>
          <Header title={'Money transfer'} />
          <UnorderedList>
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
          </UnorderedList>
        </section>
        <section>
          <Header title={'Support'} />
          <UnorderedList>
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
          </UnorderedList>
        </section>
        <section>
          <Header title={'Quick links'} />
          <UnorderedList>
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
          </UnorderedList>
        </section>
        <section>
          <Header title={'Legal'} />
          <UnorderedList>
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
            <Link description={'Lorem ipsum dolor sit amet.'} />
          </UnorderedList>
        </section>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ad minima suscipit reiciendis aut hic minus recusandae!
        </p>
        <UnorderedList>
          <Link icon={<GiEgyptianSphinx />} description={'Egypt'} />
          <Link icon={<GiSpain />} description={'Phillippines'} />
          <Link icon={<GiEgyptianSphinx />} description={'India'} />
          <Link icon={<GiEgyptianSphinx />} description={'Lebanon'} />
          <Link icon={<GiEgyptianSphinx />} description={'Tunisia'} />
        </UnorderedList>
        <Markets />
      </div>
    </section>
  )
}
