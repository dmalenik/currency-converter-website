import React from 'react'
import { Heading, SecurityDisclaimer } from '../../components'
import { Exchange } from './Exchange'
import { IoShieldCheckmark } from 'react-icons/io5'

export const ExchangeSection = () => {
  return (
    <section>
      <Heading
        title={'Currency Converter'}
        size={1}
        description={
          'Convert popular currencies at effective exchange rates with ourcurrency converter calculator.'
        }
      />
      <Exchange />
      <footer>
        <SecurityDisclaimer
          icon={<IoShieldCheckmark />}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequiinquibusdam minus magni pariatur nobis non, aut, animi officiadolorumarchitecto, consequatur soluta assumenda sed aspernaturvoluptatum!'
          }
        />
      </footer>
    </section>
  )
}
