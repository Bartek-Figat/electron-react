import React from 'react';
import { LinkPath } from '../../componets/Link/Link';
import { List } from '../../componets/LiList/List';
import { dashboardStyleCss } from './DashboardStyleCss';
import './Dashboard.css';

const {
  mainContainer,
  main: {
    mainLeft,
    mainRight,
    sidebar: { top, bottom, list },
  },
} = dashboardStyleCss;

export const Admin = () => {
  return (
    <div className="main" style={mainContainer}>
      <section className="main-left" style={mainLeft}>
        <div className="main-side-bar__top" style={top}></div>
        <div className="main-side-bar__bottom" style={bottom}>
          <ul className="main-side__list" style={list}>
            <List>
              <LinkPath to="#">Dashboard</LinkPath>
            </List>

            <List>
              <LinkPath to="#">Calendar</LinkPath>
            </List>

            <List>
              <LinkPath to="#">Mail</LinkPath>
            </List>

            <List>
              <LinkPath to="#">To-Do</LinkPath>
            </List>

            <List>
              <LinkPath to="#">File Manager</LinkPath>
            </List>

            <List>
              <LinkPath to="#">Contacts</LinkPath>
            </List>

            <List>
              <LinkPath to="#">Notes</LinkPath>
            </List>

            <List>
              <LinkPath to="#">Chat</LinkPath>
            </List>
          </ul>
        </div>
      </section>

      <section className="main-right" style={mainRight}>
        <div className="main-conntent"></div>
      </section>
    </div>
  );
};
