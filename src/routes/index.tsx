import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../components/Layout/Header/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../components/Layout/Footer/Footer';
import StartPage from '../components/Pages/StartPage/StartPage';

const useStyles = makeStyles(theme => ({
  // TODO: Reuse this style in header as well
  wrapper: {
    margin: 'auto',
    padding: theme.spacing(2)
  },
  root: {
    flexGrow: 1
  }
}));

const Routes = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Header /> */}
      <Switch>
        <Route path='/' exact component={StartPage} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default Routes;
