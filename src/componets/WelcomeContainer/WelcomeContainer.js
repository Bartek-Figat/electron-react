import React from 'react';

const welcome = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #1b2330 0%, #252f3e 100%)',
    color: '#fff',
    height: '50vh',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem',
  },
};

export const WelcomeContainer = ({ children, ...res }) => {
  return (
    <div className="main-right__welcome" style={welcome.main}>
      <div className="main-right__welcome__title" style={welcome.content}>
        <h2>Welcome back...</h2>
      </div>
      {children}
    </div>
  );
};
