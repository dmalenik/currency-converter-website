import React from 'react';
import { Language, Logo, Menu, MenuItem, MenuOptions } from './components';
import {
  languageData,
  loginData,
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
        <MenuItem {...sendMoneyData} />
        <MenuItem {...trackTransferData} />
        <MenuOptions {...menuOptionsData} />
        <Language {...languageData} />
        <MenuItem {...registerData} />
        <MenuItem {...loginData} />
      </Menu>
    </header>
  );
};
