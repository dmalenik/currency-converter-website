import React from 'react'
import { Exchange } from './components'
import { IoShieldCheckmark } from 'react-icons/io5'
import { Disclaimer } from '../../components'

export const ExchangeSection = () => {
  return (
    <section>
      <header>
        <h1>Currency Converter</h1>
        <p>
          Convert popular currencies at effective exchange rates with our
          currency converter calculator.
        </p>
      </header>
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
