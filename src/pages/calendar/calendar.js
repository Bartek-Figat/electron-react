import React, { useState, useEffect } from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import { compareAsc, format } from 'date-fns';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { NavBar } from '../navBar/navBar';
import { dashboardStyleCss } from '../dashboard/DashboardStyleCss';
import { styleCalendar } from './StyleClendar';
import { CalendarHeader } from './calendarHeader';
import { Header } from '../../componets/Header/Header';

const v = format(new Date(), 'MMM');

const {
  mainContainer,
  main: { mainLeft, mainRight },
} = dashboardStyleCss;

const { main } = styleCalendar;

export const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState();

  const handleDates = ({ allDay, start, end }) => {
    console.log('=============handleDates===============');
    console.log(allDay);
    console.log(start);
    console.log(end);
    console.log('============================');
  };

  const handleDateSelect = ({ end, endStr, startStr, timeZone, allDay, jsEvent, view }) => {
    console.log('=============handleDateSelect===============');
    console.log(end);
    console.log(endStr);
    console.log(startStr);
    console.log(timeZone);
    console.log(allDay);
    console.log(jsEvent);
    console.log(view);
    console.log('============================');
  };
  const events = ({ end, endStr, startStr, timeZone }) => {
    console.log('=============events===============');
    console.log(end);
    console.log(endStr);
    console.log(startStr);
    console.log(timeZone);
    console.log('============================');
  };

  const renderEventContent = (e) => {
    console.log('=============renderEventContent===============');
    console.log(e);
    console.log('============================');
  };
  const handleEventClick = (e) => {
    console.log('==============handleEventClick==============');
    console.log(e);
    console.log('============================');
  };

  const handleEventAdd = (e) => {
    console.log('=============handleEventAdd===============');
    console.log(e);
    console.log('============================');
  };

  const handleEventChange = (e) => {
    console.log('==============handleEventChange==============');
    console.log(e);
    console.log('============================');
  };
  const handleEventRemove = (e) => {
    console.log('=============handleEventRemove===============');
    console.log(e);
    console.log('============================');
  };
  const handleEventDrop = (e) => {
    console.log('=============handleEventDrop===============');
    console.log(e);
    console.log('============================');
  };
  return (
    <div className="main" style={mainContainer}>
      <section className="main-left" style={mainLeft}>
        <NavBar />
      </section>
      <section className="main-right" style={mainRight}>
        <div className="main-conntent" style={mainRight.mainConntent}>
          <div className="calendar" style={main}>
            <p>{v}</p>

            <Header />
            <CalendarHeader />
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
              initialView="dayGridMonth"
              editable
              selectable
              selectMirror
              dayMaxEvents
              weekends
              datesSet={handleDates}
              select={handleDateSelect}
              events={events}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              eventAdd={handleEventAdd}
              eventChange={handleEventChange}
              eventRemove={handleEventRemove}
              eventDrop={handleEventDrop}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
