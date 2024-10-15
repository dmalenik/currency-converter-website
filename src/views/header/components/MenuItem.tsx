import React from 'react';

import { type MenuItemProps } from '../types';

export const MenuItem = ({ text }: MenuItemProps) => {
  return (
    <button disabled type="button">
      {text}
    </button>
  );
};
