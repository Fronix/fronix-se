import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Route, Switch } from 'react-router';
import StartPage from '../components/Startpage/StartPage';
import Header from '../components/Header/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

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
      <Box component='main' className={classes.wrapper}>
        <Grid container spacing={1}>
          {/* <Grid item xs={12}>
            <Header />
          </Grid> */}
          <Grid item xs={12}>
            <Switch>
              <Route path='/' exact component={StartPage} />
            </Switch>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Routes;
