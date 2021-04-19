import React from 'react';
import { NavBar } from '../navBar/navBar';
import { dashboardStyleCss } from '../dashboard/DashboardStyleCss';

const {
  mainContainer,
  main: { mainLeft, mainRight },
} = dashboardStyleCss;

export const Email = () => {
  return (
    <div className="main" style={mainContainer}>
      <section className="main-left" style={mainLeft}>
        <NavBar />
      </section>
      <section className="main-right" style={mainRight}>
        <div className="main-conntent" style={mainRight.mainConntent}>
          <div className="email">
            <p>Email</p>
          </div>
        </div>
      </section>
    </div>
  );
};
