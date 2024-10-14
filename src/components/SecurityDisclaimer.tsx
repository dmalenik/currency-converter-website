import React from 'react';
import { FaUnlockAlt } from 'react-icons/fa';
import { FaListCheck } from 'react-icons/fa6';

export const SecurityDisclaimer = () => {
  return (
    <section>
      <div>
        <FaUnlockAlt />
        <p>We encrypt your transfers.</p>
      </div>
      <div>
        <FaListCheck />
        <p>We are committed to keeping your data secure.</p>
      </div>
    </section>
  );
};
