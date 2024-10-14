import React from 'react';

import { type TrackTransferType } from '../types';

export const TrackTransfer = ({ text }: TrackTransferType) => {
  return (
    <button disabled type="button">
      {text}
    </button>
  );
};
