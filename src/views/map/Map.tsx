import React from 'react'
import { SiQatarairways } from 'react-icons/si'
import { GiGrainBundle, GiEgyptianSphinx, GiSpain } from 'react-icons/gi'
import { FaFlagUsa } from 'react-icons/fa6'
import { Search, Link, Markets, UnorderedList, Heading } from '../../components'

export const Map = () => {
  return (
    <div>
      <div>
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
        <section>
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
        <section>
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
        <section>
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
        <section>
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
      </div>
      <div>
        <p>
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
