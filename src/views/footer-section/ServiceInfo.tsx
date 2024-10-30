import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

export const ServiceInfo = () => {
  return (
    <div>
      {/** Footer links */}
      <ul>
        <li>
          <button type='button'>Investor relations</button>
        </li>
        <li>
          <button type='button'>Careers</button>
        </li>
        <li>
          <button type='button'>Western Union Foundation</button>
        </li>
        <li>
          <button type='button'>Intellectual property</button>
        </li>
        <li>
          <button type='button'>Help</button>
        </li>
        <li>
          <button type='button'>Cookie Information</button>
        </li>
        <li>
          <button type='button'>Online Privacy Statement</button>
        </li>
        <li>
          <button type='button'>Terms of service</button>
        </li>
      </ul>
      <div>
        {/** Footer copyright */}
        <div>
          <FaRegCopyright />
          <p>2021 Western Union Holdings, Inc.</p>
        </div>
        <p>All Rights Reserved</p>
      </div>
    </div>
  )
}
