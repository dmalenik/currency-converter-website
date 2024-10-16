import React from 'react';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import { SiQatarairways } from 'react-icons/si';
import { GiEgyptianSphinx } from 'react-icons/gi';
import { FaFlagUsa, FaLandmarkFlag } from 'react-icons/fa6';
import { FaInfoCircle } from 'react-icons/fa';
import { IoShieldCheckmark } from 'react-icons/io5';

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
      <form action="">
        <div className="inputs">
          <div className="input-card">
            <div className="input">
              <label htmlFor="send-amount">Send Amount</label>
              <input type="number" id="send-amount" />
            </div>
            <div>
              <SiQatarairways />
              <p>QAR</p>
            </div>
          </div>
          <span className="arrows-icon">
            <LiaExchangeAltSolid />
          </span>
          <div className="input-card">
            <div className="input">
              <label htmlFor="receive-amount">Receiver gets</label>
              <input type="number" id="receive-amount" />
              <select
                id="currencies-list"
                aria-label="Choose a currency from the list"
              >
                <option>
                  <div className="currency">
                    <GiEgyptianSphinx />
                    <p>EGP</p>
                  </div>
                </option>
                <option>
                  <div className="currency">
                    <FaFlagUsa />
                    <p>USD</p>
                  </div>
                </option>
                <option>
                  <div className="currency">
                    <FaLandmarkFlag />
                    <p>UAH</p>
                  </div>
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="info">
          <p>FX: 1.00 QAR = 0.2693 USD</p>
          <p>Fee: 30.00 QAR</p>
          <div className="info-container">
            <FaInfoCircle />
            <p className="info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum et
              quo ea culpa vitae, incidunt necessitatibus in voluptates,
              accusantium accusamus voluptatibus sunt libero fugit, odit
              provident animi molestiae consequuntur dolorum?
            </p>
          </div>
        </div>
        <button type="button">Send money</button>
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
  );
};
