import React from 'react';

import { type MenuType } from '../types';

export const Menu = ({ children }: MenuType) => {
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
