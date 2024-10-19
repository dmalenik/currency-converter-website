import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'

export const Rates = () => {
  return (
    <div className='currency-info'>
      <p>FX: 1.00 QAR = 0.2693 USD</p>
      <p>Fee: 30.00 QAR</p>
      <div>
        <FaInfoCircle />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum et
          quoea culpa vitae, incidunt necessitatibus in voluptates,
          accusantiumaccusamus voluptatibus sunt libero fugit, odit provident
          animimolestiae consequuntur dolorum?
        </p>
      </div>
    </div>
  )
}