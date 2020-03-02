import React, { useEffect, createRef, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Pane from '../../Layout/Panes/Pane/Pane';
import { getGitConnectResume } from '../../../utils/API';
import { Work, Skill, Basics } from '../../../types/GitConnectTypes';
import Terminal from 'react-console-emulator';
import { useStoreActions, useStoreState } from '../../../store';
import WorkCard from '../../WorkCard/WorkCard';
import tempdata from '../../../tempdata.json';
import Rating from '../../Rating/Rating';
import { useHotkeys } from 'react-hotkeys-hook';
import WhoAmI from '../../WhoAmI/WhoAmI';

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
    }
  })
);

const StartPage = () => {
  const classes = useStyles();
  const toggleTheme = useStoreActions(actions => actions.themeSettings.togglePrefersDarkMode);
  const setResume = useStoreActions(actions => actions.resume.setResume);
  const resumeState = useStoreState(state => state.resume);
  const prefersDarkMode = useStoreState(state => state.themeSettings.prefersDarkMode);
  const terminalRef = useRef();
  const uniqueKey = Math.random().toString();
  //@ts-ignore
  //Focus input when pressing enter
  useHotkeys('enter', () => terminalRef.current.terminalInput.current.focus());

  const commands = {
    experience: {
      description: 'Shows my work experience',
      usage: `experience`,
      fn: (arg1: any) => {
        return (
          <Grid className={classes.root} key={uniqueKey} container spacing={2}>
            {(resumeState.resume.work as Work[]).map(c => (
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
            {(resumeState.resume.skills as Skill[]).map(s => (
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
        return <WhoAmI props={resumeState.resume.basics as Basics} />;
      }
    }
  };

  (window as any).terminal = terminalRef;

  useEffect(() => {
    setResume(tempdata as any);
    //getGitConnectResume().then(res => setResume(res.data));
  }, [setResume]);

  return (
    <Grid container>
      <Grid item sm>
        <Pane>
          <Terminal
            ref={terminalRef}
            commands={commands}
            welcomeMessage={
              <div>
                Welcome to my website! <br />
                Type help for commands
              </div>
            }
            promptLabel={'root@fronix.se:'}
            disableOnProcess
            autoFocus
          />
        </Pane>
      </Grid>
    </Grid>
  );
};

export default StartPage;
