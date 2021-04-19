import React from 'react';
import { Link } from 'react-router-dom';
import { BiTask, BiChat, BiHome, BiMapPin } from 'react-icons/bi';
import { TiTicket } from 'react-icons/ti';
import { CgNotes } from 'react-icons/cg';
import { AiFillCalendar, AiOutlineMail, AiOutlineFile, AiOutlineContacts } from 'react-icons/ai';
import { LinkPath } from '../../componets/Link/Link';
import { List } from '../../componets/LiList/List';
import { dashboardStyleCss } from '../dashboard/DashboardStyleCss';
import '../dashboard/Dashboard.css';

const {
  main: {
    sidebar: { top, bottom, list, icon },
  },
} = dashboardStyleCss;

export const NavBar = () => {
  return (
    <>
      <div className="main-side-bar__top" style={top}>
        <Link className="nav-link" to="/admin">
          <p>Logo</p>
        </Link>
      </div>
      <div className="main-side-bar__bottom" style={bottom}>
        <ul className="main-side__list" style={list}>
          <List>
            <BiHome className="main-side__list--icon" style={icon} />
            <LinkPath to="/admin">Dashboard</LinkPath>
          </List>

          <List>
            <AiFillCalendar className="main-side__list--icon" style={icon} />
            <LinkPath to="/calendar">Calendar</LinkPath>
          </List>

          <List>
            <AiOutlineMail className="main-side__list--icon" style={icon} />
            <LinkPath to="/email">Mail</LinkPath>
          </List>

          <List>
            <BiTask className="main-side__list--icon" style={icon} />
            <LinkPath to="/todo">To-Do</LinkPath>
          </List>

          <List>
            <AiOutlineFile className="main-side__list--icon" style={icon} />
            <LinkPath to="/file_menager">File Manager</LinkPath>
          </List>

          <List>
            <AiOutlineContacts className="main-side__list--icon" style={icon} />
            <LinkPath to="/contact">Contacts</LinkPath>
          </List>

          <List>
            <CgNotes className="main-side__list--icon" style={icon} />
            <LinkPath to="/notes">Notes</LinkPath>
          </List>

          <List>
            <BiChat className="main-side__list--icon" style={icon} />
            <LinkPath to="/chat">Chat</LinkPath>
          </List>
          <List>
            <BiMapPin className="main-side__list--icon" style={icon} />
            <LinkPath to="/map">Map</LinkPath>
          </List>
          <List>
            <TiTicket className="main-side__list--icon" style={icon} />
            <LinkPath to="/tickets">Tickets</LinkPath>
          </List>
        </ul>
      </div>
    </>
  );
};
