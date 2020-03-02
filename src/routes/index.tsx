import React from 'react';
import StartPage from '../components/Pages/StartPage/StartPage';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: 'auto',
    padding: theme.spacing(2)
  },
  root: {
    flexGrow: 1
  },
  alignItemsAndJustifyContent: {
    margin: 'auto'
  }
}));

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <div style={{ display: 'block', textAlign: 'center', paddingTop: '12rem' }}>
      <img
        src='https://media.giphy.com/media/3ohzdQ1IynzclJldUQ/giphy.gif'
        alt={`Ah ah ah, you didn't say the magic word`}
      />
      <br />
      <Button className={classes.alignItemsAndJustifyContent} onClick={() => window.history.back()}>
        Go back
      </Button>
    </div>
  );
};

const Routes = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Header /> */}
      <Switch>
        <Route path='/' exact component={StartPage} />
        <Route component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default Routes;
