import React from 'react';
import { CgNotes } from 'react-icons/cg';
import { AiFillCalendar, AiOutlineMail, AiOutlineContacts } from 'react-icons/ai';

const header = {
  main: {
    display: 'flex',
    height: '10vh',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  icons: {
    display: 'flex',
    justifyContent: 'right',
    alignSelf: 'center',
    margin: '1rem',
    padding: '0.5rem',
    fontSize: '1.3rem',
  },
  icon: {
    padding: '0.3rem',
    marginLeft: '0.8rem',
    color: '#000',
  },
};

export const Header = ({ children, ...res }) => (
  <header className="main-right__header" style={header.main} {...res}>
    <div className="main-right__icons--list" style={header.icons}>
      <AiFillCalendar style={header.icon} />
      <AiOutlineMail style={header.icon} />
      <AiOutlineContacts style={header.icon} />
      <CgNotes style={header.icon} />
    </div>

    {children}
  </header>
);
