import { Route, Switch } from 'react-router-dom';
import { Navigation } from '../navigation/path';
import { Home } from '../pages/home/Home';
import { Admin } from '../pages/dashboard/Dashboard';

export const Routing = () => (
  <Switch>
    <Route path={Navigation.HOME} exact>
      <Home />
    </Route>
    <Route path={Navigation.DASBOARD} exact>
      <Admin />
    </Route>
  </Switch>
);
