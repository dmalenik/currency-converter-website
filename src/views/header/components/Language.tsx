import React from 'react';

import { type MenuItemProps } from '../../../types'

export const Language = ({ icon, text }: MenuItemProps) => {
  return (
    <div>
      {icon}
      <p>{text}</p>
    </div>
  );
};
