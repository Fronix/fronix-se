import React, { useEffect, useState } from 'react';
import StartPage from '../components/Pages/StartPage/StartPage';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router';
import Button from '@material-ui/core/Button';
import { getConsoleText, getGitConnectResume } from '../utils/API';
import packageJson from '../../package.json';
import { useStoreActions, useStoreState } from '../store';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
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
  const asciiArt = useStoreState(state => state.themeSettings.asciiArt);
  const setResume = useStoreActions(actions => actions.resume.setResume);
  const resume = useStoreState(state => state.resume.resume);
  const [loadingResume, setLoadingResume] = useState(false);

  useEffect(() => {
    setLoadingResume(true);
    // true = fake data
    // false = real data
    const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    getGitConnectResume(development).then(res => {
      setResume(res.data);
    });
    if (!asciiArt) {
      getConsoleText.then(res => {
        console.log(res.data);
        console.log(
          `%cVersion: ${packageJson.version}`,
          'color: #66D9EF; font-size: 24px; font-family: Monospace;'
        );
      });
    }
    setLoadingResume(false);
  }, [asciiArt, resume, setResume]);

  if (loadingResume) {
    return (
      <Backdrop className={classes.backdrop} open>
        <CircularProgress color='inherit' />
      </Backdrop>
    );
  }

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
