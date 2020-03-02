import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Rating as MaterialRating } from '@material-ui/lab';
import { Skill } from '../../types/GitConnectTypes';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  legend: {
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    padding: 5,
    width: 'auto'
  }
});

type RatingProps = {
  props: Skill;
};

const Rating = ({ props }: RatingProps) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} variant='outlined'>
      <div className={classes.legend}>
        <Typography component='legend'>{props.name}</Typography>
        <Typography color='textSecondary' component='legend' variant='body2'>
          {props.yearsOfExperience}yrs
        </Typography>
      </div>
      <MaterialRating name='skill-level' value={props.rating} readOnly precision={1} size='large' />
    </Paper>
  );
};

export default Rating;
