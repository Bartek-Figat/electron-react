import React from 'react';

const fstCard = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: '0 auto',
  },
};

export const FstCard = ({ children, ...res }) => {
  return (
    <div className="fst__main" style={fstCard.main} {...res}>
      {children}
    </div>
  );
};
