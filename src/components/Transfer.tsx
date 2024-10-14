import React from 'react';
import { TransferSection } from './TransferSection';
import {
  transferSectionData,
  registerSectionData,
  sendSectionData,
} from '../data';

export const Transfer = () => {
  return (
    <section>
      <TransferSection {...transferSectionData} />
      <TransferSection {...registerSectionData} />
      <TransferSection {...sendSectionData} />
    </section>
  );
};
