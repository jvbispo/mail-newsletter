
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { StoriesList } from '../pages/StoriesList';




const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin/stories" exact component={StoriesList} />
    </Switch>
  );
};

export default Routes;