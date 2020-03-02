import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Pane from '../../Layout/Panes/Pane/Pane';
import { Work, Skill, Basics } from '../../../types/GitConnectTypes';
import Terminal from 'react-console-emulator';
import { useStoreActions, useStoreState } from '../../../store';
import WorkCard from '../../WorkCard/WorkCard';
import Rating from '../../Rating/Rating';
import WhoAmI from '../../WhoAmI/WhoAmI';
import Cowsay from '../../Cowsay/Cowsay';

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
    }
  })
);

const StartPage = () => {
  const classes = useStyles();
  const toggleTheme = useStoreActions(actions => actions.themeSettings.togglePrefersDarkMode);
  const { resume, themeSettings } = useStoreState(state => state);
  const prefersDarkMode = useStoreState(state => state.themeSettings.prefersDarkMode);
  const terminalRef = useRef();
  const uniqueKey = Math.random().toString();

  const commands = {
    experience: {
      description: 'Shows my work experience',
      usage: `experience`,
      fn: (arg1: any) => {
        return (
          <Grid className={classes.root} key={uniqueKey} container spacing={2}>
            {(resume.resume.work as Work[]).map(c => (
              <Grid key={uniqueKey} item>
                <WorkCard props={c as Work} />
              </Grid>
            ))}
          </Grid>
        );
      }
    },
    skills: {
      description: 'Shows details about my skillset',
      usage: `skills`,
      fn: (arg1: any) => {
        return (
          <Grid className={classes.skillRoot} key={uniqueKey} container spacing={4}>
            {(resume.resume.skills as Skill[]).map(s => (
              <Grid key={uniqueKey + s.name} item lg={5}>
                <Rating props={s} />
              </Grid>
            ))}
          </Grid>
        );
      }
    },
    'toggle-theme': {
      description: 'Toggles theme between light and dark',
      usage: `toggle-theme`,
      fn: () => {
        toggleTheme();
        return `Theme is set to ${prefersDarkMode ? 'Light mode' : 'Dark mode'}`;
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
      fn: (arg1: string) => {
        return <Cowsay text={arg1} />;
      }
    }
  };

  return (
    <Grid container>
      <Grid item sm>
        <Pane>
          <Terminal
            ref={terminalRef}
            commands={commands}
            welcomeMessage={
              <div>
                <Cowsay text='Welcome to fronix.se!' />
                <br />
                Type help for commands
              </div>
            }
            promptLabel={'root@fronix.se:'}
            autoFocus
            style={{
              maxHeight: '520px'
            }}
          />
        </Pane>
      </Grid>
    </Grid>
  );
};

export default StartPage;
