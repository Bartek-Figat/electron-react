import React from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { NavBar } from '../navBar/navBar';
import { dashboardStyleCss } from '../dashboard/DashboardStyleCss';

const {
  mainContainer,
  main: { mainLeft, mainRight },
} = dashboardStyleCss;

export const MyCalendar = () => {
  return (
    <div className="main" style={mainContainer}>
      <section className="main-left" style={mainLeft}>
        <NavBar />
      </section>
      <section className="main-right" style={mainRight}>
        <div className="main-conntent" style={mainRight.mainConntent}>
          <div className="calendar">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
              initialView="dayGridMonth"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
