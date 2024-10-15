import React from 'react';

import { type MenuItemProps } from '../types';

export const Logo = ({ icon, text }: MenuItemProps) => {
  return (
    <div>
      {icon}
      <p>{text}</p>
    </div>
  );
};
