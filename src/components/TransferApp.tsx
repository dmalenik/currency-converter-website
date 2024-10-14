import React from 'react';
import {
  FaCheckCircle,
  FaRegStar,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa';
import { IoMdPhonePortrait } from 'react-icons/io';

export const TransferApp = () => {
  return (
    <section>
      <div>
        <header>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos.
          </h2>
          <ul>
            <li>
              <div>
                <FaCheckCircle />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  vitae inventore nulla sequi!
                </p>
              </div>
            </li>
            <li>
              <div>
                <FaCheckCircle />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
            <li>
              <div>
                <FaCheckCircle />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </li>
          </ul>
          <button type="button">Download now</button>
        </header>
        <div className="app">
          <div className="rating">
            <div className="ratings">
              <div className="marks">
                <p>
                  4.5<span>/5</span>
                </p>
                <div className="stars">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <div className="marks">
                <p>
                  4.5<span>/5</span>
                </p>
                <div className="stars">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
            </div>
            <p className="ratings-description">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="apps">
            <button
              type="button"
              disabled
              aria-label="Download app in App Store"
            >
              <FaApple />
            </button>
            <button
              type="button"
              disabled
              aria-label="Download app in Google Play Store"
            >
              <FaGooglePlay />
            </button>
          </div>
        </div>
      </div>
      <div>
        <IoMdPhonePortrait />
      </div>
    </section>
  );
};
