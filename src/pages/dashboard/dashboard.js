import React from 'react';
import { Link } from 'react-router-dom';
import { dashboardStyleCss } from './dashboardStyleCss';

const {
  mainContainer,
  main: {
    mainLeft,
    mainRight,
    sidebar: { top, bottom, list, itemList, link },
  },
} = dashboardStyleCss;

export const Admin = () => {
  return (
    <div className="main" style={mainContainer}>
      <section className="main-left" style={mainLeft}>
        <div className="main-side-bar__top" style={top}></div>
        <div className="main-side-bar__bottom" style={bottom}>
          <ul className="main-side__list" style={list}>
            <li className="main-side-bar__list--item" style={itemList}>
              <Link to="#" style={link}>
                Link1
              </Link>
            </li>
            <li className="main-side-bar__list--item" style={itemList}>
              <Link to="#" style={link}>
                Link2
              </Link>
            </li>
            <li className="main-side-bar__list--item" style={itemList}>
              <Link to="#" style={link}>
                Link3
              </Link>
            </li>
            <li className="main-side-bar__list--item" style={itemList}>
              <Link to="#" style={link}>
                Link4
              </Link>
            </li>
            <li className="main-side-bar__list--item" style={itemList}>
              <Link to="#" style={link}>
                Link5
              </Link>
            </li>
            <li className="main-side-bar__list--item" style={itemList}>
              <Link to="#" style={link}>
                Link6
              </Link>
            </li>
            <li className="main-side-bar__list--item" style={itemList}>
              <Link to="#" style={link}>
                Link7
              </Link>
            </li>
            <li className="main-side-bar__list--item" style={itemList}>
              <Link to="#" style={link}>
                Link8
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="main-right" style={mainRight}>
        <div className="main-conntent"></div>
      </section>
    </div>
  );
};
