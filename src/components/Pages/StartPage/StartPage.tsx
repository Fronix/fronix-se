import React, { useEffect, createRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Pane from '../../Layout/Panes/Pane/Pane';
import { getGitConnectResume } from '../../../utils/API';
import { Work, Skill } from '../../../types/GitConnectTypes';
import Terminal from 'react-console-emulator';
import { useStoreActions, useStoreState } from '../../../store';
import WorkCard from '../../WorkCard/WorkCard';
import tempdata from '../../../tempdata.json';
import Rating from '../../Rating/Rating';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    skillRoot: {
      flexGrow: 1,
      width: '30%'
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
  const setResume = useStoreActions(actions => actions.resume.setResume);
  const resumeState = useStoreState(state => state.resume);
  const terminalRef: any = createRef();
  const resumeCommands = ['experience', 'info', 'skills', 'education', 'projects'];
  const uniqueKey = Math.random().toString();
  const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: function() {
        return `${Array.from(arguments).join(' ')}`;
      }
    },
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
          />
        </Pane>
      </Grid>
    </Grid>
  );
};

export default StartPage;
