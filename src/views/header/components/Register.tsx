import React from 'react';

import { type RegisterType } from '../types';

export const Register = ({ text }: RegisterType) => {
  return (
    <button type="button" disabled>
      {text}
    </button>
  );
};
