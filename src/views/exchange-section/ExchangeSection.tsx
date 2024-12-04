import React from 'react'
import { SecurityDisclaimer } from '../../components'
import { Exchange } from './components'
import { IoShieldCheckmark } from 'react-icons/io5'

export const ExchangeSection = () => {
  return (
    <section data-testid='exchange-section'>
      <h1>Currency Converter</h1>
      <p>
        Convert popular currencies at effective exchange rates with ourcurrency
        converter calculator.
      </p>
      <Exchange />
      <footer data-testid='exchange-section-footer'>
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
