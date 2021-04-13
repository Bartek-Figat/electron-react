import React from 'react';
import './Button.css';

export const Button = ({ children, ...res }) => {
  return (
    <button className="btn--primary" {...res}>
      {children}
    </button>
  );
};
