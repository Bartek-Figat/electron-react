import React from 'react';
import { NavBar } from '../navBar/navBar';
import { Header } from '../../componets/Header/Header';
import { WelcomeContainer } from '../../componets/WelcomeContainer/WelcomeContainer';
import { ChartDashborad } from '../../componets/Chart/Chart';
import { FstDetales } from '../../componets/FST_Detales/FstDetales';
import { FstCard } from '../../componets/FST_Detales/FST_Card/FST_Card';
import { CardList } from '../../componets/FST_Detales/CardList/CradList';
import { dashboardStyleCss } from './DashboardStyleCss';
import { fstCardList } from '../../componets/FST_Detales/CardList/CradList';
import { ListFromDb } from '../../main/index';
import './Dashboard.css';

const {
  mainContainer,
  main: { mainLeft, mainRight },
} = dashboardStyleCss;

export const Admin = () => {
  return (
    <div className="main" style={mainContainer}>
      <section className="main-left" style={mainLeft}>
        <NavBar />
      </section>

      <section className="main-right" style={mainRight}>
        <div className="main-conntent" style={mainRight.mainConntent}>
          <Header />
          <WelcomeContainer>
            <ChartDashborad />
          </WelcomeContainer>
          <FstDetales>
            <FstCard>
              <CardList>
                <li style={fstCardList.wrapperList}>
                  <li style={fstCardList.li}>
                    <input type="checkbox" />
                  </li>
                  <li style={fstCardList.li}>First Name</li>
                  <li style={fstCardList.li}>Last Name</li>
                  <li style={fstCardList.li}>Company</li>
                  <li style={fstCardList.li}> Job Title</li>
                  <li style={fstCardList.li}>Email</li>
                  <li style={fstCardList.li}>Phone</li>
                </li>
              </CardList>
              <ListFromDb />
            </FstCard>
          </FstDetales>
        </div>
      </section>
    </div>
  );
};
