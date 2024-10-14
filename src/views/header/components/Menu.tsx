import React from 'react';

export const Menu = ({ children }: any) => {
  return (
    <nav>
      <ul>
        {children.map((child: any) => (
          <li key={crypto.randomUUID()}>{child}</li>
        ))}
      </ul>
    </nav>
  );
};
