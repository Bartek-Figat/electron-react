import { Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import { Navigation } from '../navigation/path';
import { Home } from '../pages/home/Home';
import { Admin } from '../pages/dashboard/Dashboard';
import { MyCalendar } from '../pages/calendar/calendar';
import { Email } from '../pages/email/email';
import { Chat } from '../pages/chat/chat';
import { Contacts } from '../pages/contacts/contacts';
import { FileMenager } from '../pages/file_menager/fileMenager';
import { Map } from '../pages/map/map';
import { Notes } from '../pages/notes/notes';
import { Tickets } from '../pages/tickets/tickets';
import { ToDo } from '../pages/todo/todo';
export const Routing = () => (
  <Fragment>
    <Switch>
      <Route path={Navigation.HOME} exact component={Home} />
      <Route path={Navigation.DASBOARD} exac component={Admin} />
      <Route path={Navigation.CALENDAR} exact component={MyCalendar} />
      <Route path={Navigation.CONTACTS} exact component={Contacts} />
      <Route path={Navigation.CHAT} exact component={Chat} />
      <Route path={Navigation.EMAIL} exact component={Email} />
      <Route path={Navigation.FILE_MENAGER} exact component={FileMenager} />
      <Route path={Navigation.MAP} exact component={Map} />
      <Route path={Navigation.NOTES} exact component={Notes} />
      <Route path={Navigation.TICKETS} exact component={Tickets} />
      <Route path={Navigation.TODO} exact component={ToDo} />
    </Switch>
  </Fragment>
);
