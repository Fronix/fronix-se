import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Rating as MaterialRating } from '@material-ui/lab';
import { Skill } from '../../types/GitConnectTypes';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '60%',
      padding: '0.5rem 0',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    },
    legend: {
      display: 'flex',
      justifyContent: 'center'
    },
    paper: {
      padding: 5,
      width: 'auto'
    },
    linearRoot: {
      height: '12px',
      borderRadius: '2px'
    }
  })
);

type RatingProps = {
  props: Skill;
};

export enum RatingToProgress {
  'Learning' = 20,
  'Beginner' = 40,
  'Intermediate' = 60,
  'Advanced' = 80,
  'Expert' = 100
}

const Rating = ({ props }: RatingProps) => {
  const classes = useStyles();
  const level = RatingToProgress[(props.level as any) as keyof typeof RatingToProgress];

  return (
    <div className={classes.root}>
      {props.name}
      <LinearProgress
        classes={{
          root: classes.linearRoot
        }}
        variant='determinate'
        color='secondary'
        value={level}
      />
    </div>
    // <Paper className={classes.paper} variant='outlined'>
    //   <div className={classes.legend}>
    //     <Typography component='legend'>{props.name}</Typography>
    //     <Typography color='textSecondary' component='legend' variant='body2'>
    //       {props.yearsOfExperience}yrs
    //     </Typography>
    //   </div>
    //   <MaterialRating name='skill-level' value={props.rating} readOnly precision={1} size='large' />
    // </Paper>
  );
};

export default Rating;
