import React from 'react';

export const Menu = ({ children }) => {
  console.log(children);
  return (
    <nav>
      <ul>
        <li>{/** Send money */}</li>
        <li>{/** Track transfer */}</li>
        <li>{/** Menu options */}</li>
        <li>{/** Language options */}</li>
        <li>{/** Register button */}</li>
        <li>{/** Login button */}</li>
      </ul>
    </nav>
  );
};
