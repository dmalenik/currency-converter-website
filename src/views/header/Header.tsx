import React from 'react';
import {
  Language,
  Logo,
  Menu,
  Register,
  SendMoney,
  TrackTransfer,
  MenuOptions,
} from './components';
import {
  languageData,
  logoData,
  menuOptionsData,
  registerData,
  sendMoneyData,
  trackTransferData,
} from './data';

export const Header = () => {
  return (
    <header>
      <Logo {...logoData} />
      <Menu>
        <SendMoney {...sendMoneyData} />
        <TrackTransfer {...trackTransferData} />
        <MenuOptions {...menuOptionsData} />
        <Language {...languageData} />
        <Register {...registerData} />
      </Menu>
    </header>
  );
};
