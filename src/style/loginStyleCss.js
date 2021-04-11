import React, { useState } from 'react';
import logo from '../img/photo-1513828583688-c52646db42da.jfif';

export const loginStyleCss = {
  loginWrapper: {
    display: 'flex',
    flex: '1',
    height: '100vh',
  },

  loginContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    alignItems: 'center',
  },

  loginForm: {
    formTitle: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '1.3rem',
      fontWeight: 500,
      lineHeight: '30px',
    },
    container: {
      display: 'flex',
      flex: '0.4',
      justifyContent: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0.6',
    },
    input: {
      margin: '0.8rem',
      padding: '.375rem .75rem',
      lineHeight: 1.5,
    },
  },
  loginImgHero: {
    display: 'flex',
    flex: '0.6',
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh',
  },
};

export const Button = ({ btn }) => {
  const [backgroundColor, setBackgroundColor] = useState('#4466f2');
  const [fontColor, setfontColor] = useState('#fff');

  const loginStyleCss = {
    button: {
      padding: '0.8rem',
      margin: '0.8rem',
      backgroundColor: `${backgroundColor}`,
      borderColor: '#4466f2',
      border: '1px solid #4466f2',
      borderRadius: '5px',
      color: `${fontColor}`,
      textDecoration: 'none',
      textShadow: '0 -1px 0 #082783',
      font: '12px Verdana, sans-serif',
      letterSpacing: '.7px',
    },
  };

  const setBackground = (backgroundColor, color) => {
    setBackgroundColor(backgroundColor);
    setfontColor(color);
  };
  return (
    <button
      type="submit"
      onMouseEnter={() => setBackground('#fff', '#4466f2')}
      onMouseOut={() => setBackground('#4466f2', '#fff')}
      className={btn}
      style={loginStyleCss.button}
    >
      Login
    </button>
  );
};

export const LoginTitle = () => {
  return (
    <p className="login-title" style={loginStyleCss.loginForm.formTitle}>
      PSI Process
    </p>
  );
};
