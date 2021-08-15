import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MAIN_PAGE } from '../../const';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';


import './app.scss';

function App() {
  return (
    <Switch>
      <Route exact path={MAIN_PAGE}>
        <MainPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
