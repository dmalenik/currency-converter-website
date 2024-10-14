import React from 'react';
import { type LanguageType } from '../types';

export const Language = ({ icon, text }: LanguageType) => {
  return (
    <div>
      {icon}
      <p>{text}</p>
    </div>
  );
};
