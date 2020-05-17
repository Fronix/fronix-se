import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Pane from '../../Layout/Panes/Pane/Pane';
import { Work, Skill, Basics } from '../../../types/GitConnectTypes';
import Terminal from 'react-console-emulator';
import { useStoreActions, useStoreState } from '../../../store';
import WorkCard from '../../WorkCard/WorkCard';
import Rating, { RatingToProgress } from '../../Rating/Rating';
import WhoAmI from '../../WhoAmI/WhoAmI';
import Cowsay from '../../Cowsay/Cowsay';
import { spongebobText } from '../../../utils/textUtils';
import { uniqueId } from 'lodash';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core';


type CommandResultProps = {
  command: string;
  args: string[];
  rawInput: string;
  result: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    skillRoot: {
      flexGrow: 1,
      width: '25%'
    },
    inline: {
      display: 'inline'
    },
    listItemText: {
      flex: '0 1 auto',
      paddingRight: '5px'
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      flex: '1 0 auto',
      marginTop: theme.spacing(3),
      padding: theme.spacing(2)
    }
  })
);

const StartPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const toggleTheme = useStoreActions(actions => actions.themeSettings.togglePrefersDarkMode);
  const { resume, themeSettings } = useStoreState(state => state);
  const simpleView = themeSettings.simpleView;
  const prefersDarkMode = useStoreState(state => state.themeSettings.prefersDarkMode);
  const terminalRef = useRef();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  console.log('Show cmd: ', (matches && !simpleView))
  //console.log('Show cmd: ', (!matches && simpleView))

  const rating = () => {
    const sortedArray = (resume.resume.skills as Skill[]).sort((a, b) => {
      const levelA = RatingToProgress[(a.level as any) as keyof typeof RatingToProgress];
      const levelB = RatingToProgress[(b.level as any) as keyof typeof RatingToProgress];
      return levelA > levelB ? 1 : -1;
    });
    return sortedArray.map(s => <Rating key={s.name} props={s} />).reverse();
  }

  const workCard = () => {
    return (
      <Grid className={classes.root} key={`${uniqueId('experience_')}`} container spacing={2}>
      {(resume.resume.work as Work[]).map(c => (
        <Grid key={`${uniqueId('experience_')}`} item>
          <WorkCard props={c as Work} />
        </Grid>
      ))}
    </Grid>
    )
  }

  const commands = {
    experience: {
      description: 'Shows my work experience',
      usage: `experience`,
      fn: (arg1: any) => workCard()
    },
    skills: {
      description: 'Shows details about my skillset',
      usage: `skills`,
      fn: (arg1: any) => rating()
    },
    'toggle-theme': {
      description: 'Toggles theme between light and dark',
      usage: `toggle-theme`,
      fn: () => {
        //toggleTheme();
        //return `Theme is set to ${prefersDarkMode ? 'Light mode' : 'Dark mode'}`;
        return `Couldn't switch theme, please do not try again.`;
      }
    },
    whoami: {
      description: 'Who am i?',
      usage: 'whoami',
      fn: () => {
        return <WhoAmI props={resume.resume.basics as Basics} />;
      }
    },
    cowsay: {
      description: 'Cow says..',
      usage: 'cowsay <string>',
      fn: function() {
        const text = Array.from(arguments).join(' ');
        if (!text) {
          return <Cowsay text='Hmmm?' think />;
        }
        return <Cowsay text={text} />;
      }
    },
    spongecow: {
      description: 'gUeSs wHaT ThIs dOeS',
      usage: 'spongecow <string>',
      fn: function() {
        const text = Array.from(arguments).join(' ');
        if (!text) {
          return <Cowsay text={`${spongebobText('You forgot to add text')}`} think />;
        }
        return <Cowsay text={spongebobText(text)} />;
      }
    }
  };

  return (
    <Grid container>
      <Grid item sm>
          <Pane>
            {(matches && !simpleView) && (
              <Terminal
                ref={terminalRef}
                commands={commands}
                welcomeMessage={<div>Type help for commands</div>}
                promptLabel={'root@fronix.se:'}
                autoFocus
                style={{
                  height: '520px',
                  minWidth: 0,
                  border: '2px solid #844f01'
                }}
              />
            )}
          {resume.resume && (
            <Hidden only={simpleView ? undefined : ['lg', 'xl']}>
              <WhoAmI props={resume.resume.basics as Basics} />
              <Paper className={classes.paper}>
                {workCard()}
              </Paper>
            </Hidden>
          )}
          </Pane>
      </Grid>
    </Grid>
  );
};

export default StartPage;
