import { Route, Switch } from 'react-router-dom';
import { Navigation } from '../navigation/path';
import { Home } from '../pages/home/home';
import { Admin } from '../pages/dashboard/dashboard';

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
