import React from 'react';

import { type SendMoneyType } from '../types';

export const SendMoney = ({ text }: SendMoneyType) => {
  return (
    <button disabled type="button">
      {text}
    </button>
  );
};
