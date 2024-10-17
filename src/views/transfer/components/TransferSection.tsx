import React from 'react';

import { type TransferSectionType } from '../../../types'

export const TransferSection = ({
  heading,
  action,
  list,
}: TransferSectionType) => {
  return (
    <section>
      <header>
        <h2>{heading}</h2>
        {action ?? (
          <button type="button" disabled>
            {action}
          </button>
        )}
      </header>
      <ul>
        {list?.map(({ id, icon, listHeading, description }) => (
          <li key={id}>
            <div>
              {icon}
              <h3>{listHeading}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
