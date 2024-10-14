import React from 'react';

import { type LogoType } from '../types';

export const Logo = ({ icon, text }: LogoType) => {
  return (
    <div>
      {icon}
      <p>{text}</p>
    </div>
  );
};
