import React from 'react';
import {
  Language,
  Logo,
  Menu,
  Register,
  SendMoney,
  TrackTransfer,
  MenuOptions,
} from '../components';
import { logo } from '../data';

export const Header = () => {
  return (
    <header>
      <Logo {...logo} />
      <Menu>
        <SendMoney />
        <TrackTransfer />
        <MenuOptions />
        <Language />
        <Register />
      </Menu>
    </header>
  );
};
