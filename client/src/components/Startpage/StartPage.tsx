import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const StartPage = () => {
  const classes = useStyles();

  const FormRow = () => {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  };
  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Link component={RouterLink} to={`/help`}>
              Link
            </Link>
          </Paper>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link component={RouterLink} to={`/help2`}>
              Link2
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StartPage;
