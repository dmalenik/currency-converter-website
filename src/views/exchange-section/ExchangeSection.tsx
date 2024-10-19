import React from 'react'
import { Exchange } from './components'
import { IoShieldCheckmark } from 'react-icons/io5'
import { Header, Disclaimer } from '../../components'

export const ExchangeSection = () => {
  return (
    <section>
      <Header
        title={'Currency Converter'}
        description={
          'Convert popular currencies at effective exchange rates with ourcurrency converter calculator.'
        }
      />
      <Exchange />
      <footer>
        <Disclaimer
          icon={<IoShieldCheckmark />}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequiinquibusdam minus magni pariatur nobis non, aut, animi officiadolorumarchitecto, consequatur soluta assumenda sed aspernaturvoluptatum!'
          }
        />
      </footer>
    </section>
  )
}