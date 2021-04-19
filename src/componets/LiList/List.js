import React from 'react';
import { dashboardStyleCss } from '../../pages/dashboard/DashboardStyleCss';
import '../../pages/dashboard/Dashboard.css';

const {
  main: {
    sidebar: { itemList },
  },
} = dashboardStyleCss;

export const List = ({ children, ...res }) => (
  <li className="main-side-bar__list--item" style={itemList} {...res}>
    {children}
  </li>
);
