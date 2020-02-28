import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { paneStyles } from '../styles';

type RightPaneProps = {};

const RightPane: FC<RightPaneProps> = ({ children }) => {
  const classes = paneStyles();
  return <Paper className={classes.paper}>{children}</Paper>;
};

export default RightPane;
