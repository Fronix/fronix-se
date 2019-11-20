import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Route, Switch } from 'react-router';
import StartPage from '../components/Startpage/StartPage';
import Header from '../components/Header/Header';

const useStyles = makeStyles(theme => ({
  // TODO: Reuse this style in header as well
  wrapper: {
    margin: 'auto',
    padding: theme.spacing(2)
  }
}));

const Routes = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Header /> */}
      <Box component='main' className={classes.wrapper}>
        <Switch>
          <Route path='/' exact component={StartPage} />
        </Switch>
      </Box>
    </>
  );
};

export default Routes;
