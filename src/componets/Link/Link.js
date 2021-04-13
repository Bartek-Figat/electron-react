import React from 'react';
import { Link } from 'react-router-dom';
import { dashboardStyleCss } from '../../pages/dashboard/DashboardStyleCss';
import '../../pages/dashboard/Dashboard.css';

const {
  main: {
    sidebar: { link },
  },
} = dashboardStyleCss;

export const LinkPath = ({ children, ...res }) => {
  return (
    <Link className="main-side-bar__list--item--link" style={link} {...res}>
      {children}
    </Link>
  );
};
