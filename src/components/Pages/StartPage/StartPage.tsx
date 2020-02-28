import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import RightPane from '../../Layout/Panes/RightPane/RightPane';
import LeftPane from '../../Layout/Panes/LeftPane/LeftPane';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const StartPage = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm>
        <LeftPane>Left</LeftPane>
      </Grid>
      <Grid item sm>
        <RightPane>Right</RightPane>
      </Grid>
    </Grid>
  );
};

export default StartPage;
