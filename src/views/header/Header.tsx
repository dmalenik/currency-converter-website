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
  language,
  logo,
  menuOptions,
  register,
  sendMoney,
  trackTransfer,
} from './data';

export const Header = () => {
  return (
    <header>
      <Logo {...logo} />
      <Menu>
        <SendMoney {...sendMoney} />
        <TrackTransfer {...trackTransfer} />
        <MenuOptions {...menuOptions} />
        <Language {...language} />
        <Register {...register} />
      </Menu>
    </header>
  );
};
