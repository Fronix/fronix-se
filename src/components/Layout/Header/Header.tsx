import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useStoreState, useStoreActions } from '../../../store';
import Container from '@material-ui/core/Container';
import HeadetBG from '../../../static/thomas-tastet-header-bg-unsplash.jpg';

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
    },
    banner: {
      minHeight: '100vh'
    }
  })
);

const backgroundImage = {
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  backgroundImage: `url(${HeadetBG})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};

const Header = () => {
  const classes = useStyles();
  const { prefersDarkMode } = useStoreState(state => state.themeSettings);
  const togglePrefersDarkMode = useStoreActions(
    actions => actions.themeSettings.togglePrefersDarkMode
  );

  return (
    <div className={classes.root}>
      <Container maxWidth={false} style={backgroundImage} className={classes.banner}>
        <Typography component='h5' variant='h5'>
          Oscar Martin
        </Typography>
      </Container>
    </div>
  );
};

export default Header;
