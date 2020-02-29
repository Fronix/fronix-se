import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { paneStyles } from '../styles';

type PaneProps = {};

const Pane: FC<PaneProps> = ({ children }) => {
  const classes = paneStyles();
  return <Paper className={classes.paper}>{children}</Paper>;
};

export default Pane;
