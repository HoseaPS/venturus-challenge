import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from '../pages/form';
import List from '../pages/list';

const Routes = () => (
  <Switch>
    <Route exact path="/users/new" component={Form} />
    <Route exact path="/users" component={List} />
  </Switch>
);

export default Routes;
