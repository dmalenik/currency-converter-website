import React from 'react';
import {
  CurrencyConverter,
  SecurityDisclaimer,
  Transfer,
  TransferApp,
  Disclaimer,
} from '../components';

export const Main = () => {
  return (
    <main>
      <CurrencyConverter />
      <SecurityDisclaimer />
      <Transfer />
      <TransferApp />
      <Disclaimer />
    </main>
  );
};
