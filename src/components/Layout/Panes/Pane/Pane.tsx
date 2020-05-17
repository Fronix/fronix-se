import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { paneStyles } from '../styles';
import { useStoreState, useStoreActions } from '../../../../store';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core';

type PaneProps = {};

const Pane: FC<PaneProps> = ({ children }) => {
  const classes = paneStyles();
  const theme = useTheme();
  const { simpleView } = useStoreState(state => state.themeSettings);
  const toggleSimpleView = useStoreActions(actions => actions.themeSettings.toggleSimpleView);
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'md'));

  return (
    <Paper className={`${classes.root} ${simpleView ? !matches ? classes.sixty : '' : classes.sixty}`}>
      <Button disabled={matches} className={classes.simpleViewButton} variant="contained" color="primary" onClick={() => toggleSimpleView()}>
        {simpleView ? 'Show cmd' : 'Simple view'}
      </Button>
      <div className={classes.paper}>
        {children}
      </div>
    </Paper>
  )
};

export default Pane;
