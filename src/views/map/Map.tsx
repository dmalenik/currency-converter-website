import React from 'react';
import { SiQatarairways } from 'react-icons/si';
import {
  GiGrainBundle,
  GiEgyptianSphinx,
  GiSpain,
  GiIndianPalace,
  GiAfrica,
} from 'react-icons/gi';
import { FaFlagUsa } from 'react-icons/fa6';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export const Map = () => {
  return (
    <section>
      <div>
        <ul>
          <li>
            <div>
              <select
                name="countriesList"
                id="countries-list"
                aria-label="Choose a country from a list"
              >
                <option value="Qatar">
                  <div>
                    <SiQatarairways />
                    <p>Qatar</p>
                  </div>
                </option>
                <option value="Ukraine">
                  <div>
                    <GiGrainBundle />
                    <p>Ukraine</p>
                  </div>
                </option>
                <option value="USA">
                  <div>
                    <FaFlagUsa />
                    <p>USA</p>
                  </div>
                </option>
              </select>
              <section>
                <h3>Money transfer</h3>
                <ul>
                  <li>
                    <button type="button">Lorem ipsum dolor sit amet.</button>
                  </li>
                  <li>
                    <button type="button">Lorem ipsum dolor sit amet.</button>
                  </li>
                  <li>
                    <button type="button">Lorem ipsum dolor sit amet.</button>
                  </li>
                  <li>
                    <button type="button">Lorem ipsum dolor sit amet.</button>
                  </li>
                  <li>
                    <button type="button">Lorem ipsum dolor sit amet.</button>
                  </li>
                </ul>
              </section>
            </div>
          </li>
          <li>
            <section>
              <h3>Support</h3>
              <ul>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
              </ul>
            </section>
          </li>
          <li>
            <section>
              <h3>Quick links</h3>
              <ul>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
              </ul>
            </section>
          </li>
          <li>
            <section>
              <h3>Legal</h3>
              <ul>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
                <li>
                  <button type="button">Lorem ipsum dolor sit amet.</button>
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ad minima suscipit reiciendis aut hic minus recusandae!
        </p>
        <div>
          <div>
            <GiEgyptianSphinx />
            <p>Egypt</p>
          </div>
          <div>
            <GiSpain />
            <p>Philippines</p>
          </div>
          <div>
            <GiIndianPalace />
            <p>India</p>
          </div>
          <div>
            <GiAfrica />
            <p>Lebanon</p>
          </div>
          <div>
            <GiAfrica />
            <p>Tunisia</p>
          </div>
        </div>
        <div>
          <FaApple />
          <FaGooglePlay />
        </div>
      </div>
    </section>
  );
};
