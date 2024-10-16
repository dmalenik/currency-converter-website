import React from 'react'
import { LiaExchangeAltSolid } from 'react-icons/lia'
import { SiQatarairways } from 'react-icons/si'
import { GiEgyptianSphinx } from 'react-icons/gi'
import { FaFlagUsa, FaLandmarkFlag } from 'react-icons/fa6'
import { FaInfoCircle, FaSearch } from 'react-icons/fa'
import { IoShieldCheckmark } from 'react-icons/io5'

export const CurrencyConverter = () => {
  return (
    <section>
      <header>
        <h1>Currency Converter</h1>
        <p>
          Convert popular currencies at effective exchange rates with our
          currency converter calculator.
        </p>
      </header>
      <form action=''>
        <div className='currency-converter'>
          <div className='card'>
            <div className='currency-value'>
              <label htmlFor='send'>Send Amount</label>
              <input type='number' id='send' />
            </div>
            <div className='current-currency'>
              <SiQatarairways />
              <p>QAR</p>
            </div>
          </div>
          <span className='arrows-icon'>
            <LiaExchangeAltSolid />
          </span>
          <div className='card'>
            <div className='currency-value'>
              <label htmlFor='receive'>Receiver gets</label>
              <input type='number' id='receive' />
            </div>
            <div>
              {/** Currently selected currency*/}
              <div className='current-currency'>
                <GiEgyptianSphinx />
                <p>EGP</p>
              </div>
              <div className='currencies-list'>
                {/** Is hidden*/}
                <div>
                  <label htmlFor='currency-search'>
                    <FaSearch />
                  </label>
                  <input
                    type='search'
                    id='currency-search'
                    placeholder='Search'
                  />
                </div>
                <ul>
                  <li>
                    <div>
                      <GiEgyptianSphinx />
                      <p>EGP</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <FaFlagUsa />
                      <p>USD</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <FaLandmarkFlag />
                      <p>UAH</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='info'>
          <p>FX: 1.00 QAR = 0.2693 USD</p>
          <p>Fee: 30.00 QAR</p>
          <div>
            <FaInfoCircle />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum et
              quo ea culpa vitae, incidunt necessitatibus in voluptates,
              accusantium accusamus voluptatibus sunt libero fugit, odit
              provident animi molestiae consequuntur dolorum?
            </p>
          </div>
        </div>
        <button type='button'>Send money</button>
      </form>
      <div>
        <IoShieldCheckmark />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in
          quibusdam minus magni pariatur nobis non, aut, animi officia dolorum
          architecto, consequatur soluta assumenda sed aspernatur voluptatum!
        </p>
      </div>
    </section>
  )
}
