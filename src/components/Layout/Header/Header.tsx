import React from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useStoreState, useStoreActions } from '../../../store';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    toolbar: {
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2)
    }
  })
);

const Header = () => {
  const classes = useStyles();
  const { prefersDarkMode } = useStoreState(state => state.themeSettings);
  const togglePrefersDarkMode = useStoreActions(
    actions => actions.themeSettings.togglePrefersDarkMode
  );

  return (
    <div className={classes.root}>
      {/* <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6' className={classes.title}>
            fronix.se
          </Typography>
          <FormControlLabel
            control={<Switch checked={prefersDarkMode} onChange={() => togglePrefersDarkMode()} />}
            label='Dark'
          />
        </Toolbar>
      </AppBar> */}
      <Typography variant='h6' className={classes.title}>
        fronix.se
      </Typography>
    </div>
  );
};

export default Header;
