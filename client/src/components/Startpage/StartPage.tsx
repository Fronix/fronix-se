import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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

  return (
    <Box width='100%' height='100%' bgcolor='#cfe8fc' style={{ display: 'block' }}>
      something
    </Box>
  );
};

export default StartPage;
