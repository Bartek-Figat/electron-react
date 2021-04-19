import React from 'react';
import { styleCalendar } from './StyleClendar';

const { calendarHeader } = styleCalendar;

export const CalendarHeader = () => {
  return <div className="calendarHeader" style={calendarHeader}></div>;
};
