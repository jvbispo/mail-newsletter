
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { StoriesListPage } from '../pages/StoriesList';
import { StoryPage } from '../pages/Story';




const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/admin/stories" exact component={StoriesListPage} />
      <Route path="/admin/story/:id" exact component={StoryPage} />
    </Switch>
  );
};

export default Routes;