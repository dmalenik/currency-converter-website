import React from 'react'
import { Exchange } from './components'
import { IoShieldCheckmark } from 'react-icons/io5'

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
        <IoShieldCheckmark />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          inquibusdam minus magni pariatur nobis non, aut, animi officia
          dolorumarchitecto, consequatur soluta assumenda sed aspernatur
          voluptatum!
        </p>
      </footer>
    </section>
  )
}
