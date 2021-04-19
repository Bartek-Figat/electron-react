import React from 'react';

const fstDetales = {
  main: {
    display: 'flex',
    background: '#fff',
    width: '100%',
    marginTop: '7rem',
  },
};

export const FstDetales = ({ children, ...res }) => {
  return (
    <div className="fst__main" style={fstDetales.main}>
      {children}
    </div>
  );
};
