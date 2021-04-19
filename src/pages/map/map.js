import React from 'react';
import { NavBar } from '../navBar/navBar';
import { dashboardStyleCss } from '../dashboard/DashboardStyleCss';

const {
  mainContainer,
  main: { mainLeft, mainRight },
} = dashboardStyleCss;

export const Map = () => {
  return (
    <div className="main" style={mainContainer}>
      <section className="main-left" style={mainLeft}>
        <NavBar />
      </section>
      <section className="main-right" style={mainRight}>
        <div className="main-conntent" style={mainRight.mainConntent}>
          <div className="map">
            <p>Map</p>
          </div>
        </div>
      </section>
    </div>
  );
};
