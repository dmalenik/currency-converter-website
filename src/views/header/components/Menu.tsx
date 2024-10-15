import React from 'react';

import { type MenuProps } from '../types';

export const Menu = ({ children }: MenuProps) => {
  return (
    <nav>
      <ul>
        {children?.map(child => (
          <li key={crypto.randomUUID()}>{child}</li>
        ))}
      </ul>
    </nav>
  );
};
