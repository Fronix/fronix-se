import React, { useMemo } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router';
import StartPage from '../components/Startpage/StartPage';

const Routes = () => {
  return (
    <>
    <Switch>
      <Route path='/' exact component={StartPage} />
    </Switch>
    </>
  );
};

export default Routes;