import React from 'react';
import { FaFacebook, FaYoutube, FaRegCopyright } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { MdAnchor } from 'react-icons/md';

export const FooterNavigation = () => {
  return (
    <section>
      <div>
        <div>
          <ul>
            <li>
              <button type="button">Home</button>
            </li>
            <li>
              <button type="button">About us</button>
            </li>
            <li>
              <button type="button">Blog</button>
            </li>
            <li>
              <button type="button">Contact us</button>
            </li>
            <li>
              <button type="button">Fraud awareness</button>
            </li>
            <li>
              <button type="button">Report a security bug</button>
            </li>
          </ul>
        </div>
        <div>
          <FaFacebook />
          <FaYoutube />
          <BsInstagram />
          <FaXTwitter />
        </div>
      </div>
      <div>
        <ul>
          <li>
            <button type="button">Investor relations</button>
          </li>
          <li>
            <button type="button">Careers</button>
          </li>
          <li>
            <button type="button">Western Union Foundation</button>
          </li>
          <li>
            <button type="button">Intellectual property</button>
          </li>
          <li>
            <button type="button">Help</button>
          </li>
          <li>
            <button type="button">Cookie Information</button>
          </li>
          <li>
            <button type="button">Online Privacy Statement</button>
          </li>
          <li>
            <button type="button">Terms of service</button>
          </li>
        </ul>
        <div>
          <div>
            <FaRegCopyright />
            <p>2021 Western Union Holdings, Inc.</p>
          </div>
          <p>All Rights Reserved</p>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquid
          eius commodi beatae totam, ullam id error assumenda.
        </p>
        <div>
          <MdAnchor />
          <p>Logo</p>
        </div>
      </div>
    </section>
  );
};
