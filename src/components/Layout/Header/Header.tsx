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
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6' className={classes.title}>
            fronix.se
          </Typography>
          <FormControlLabel
            control={<Switch checked={prefersDarkMode} onChange={() => togglePrefersDarkMode()} />}
            label='Dark'
          />
          {/* <Typography component='div'>
            <Grid component='label' container alignItems='center' spacing={1}>
              <Grid item>Light</Grid>
              <Grid item>
                <AntSwitch
                  checked={prefersDarkMode}
                  onChange={() => togglePrefersDarkMode()}
                  value='checkedC'
                />
              </Grid>
              <Grid item>Dark</Grid>
            </Grid>
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex'
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main
        }
      }
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none'
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white
    },
    checked: {}
  })
)(Switch);

export default Header;
