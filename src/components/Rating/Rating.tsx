import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Rating as MaterialRating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import { Skill } from '../../types/GitConnectTypes';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const labels: { [index: string]: string } = {
  1: 'Learning',
  2: 'Beginner',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'Expert'
};

const useStyles = makeStyles({
  grid: {
    flexGrow: 1,
    paddingBottom: '5px',
    paddingTop: '5px'
  },
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap'
  }
});

type RatingProps = {
  props: Skill;
};

const Rating = ({ props }: RatingProps) => {
  const classes = useStyles();

  return (
    <Grid className={classes.grid} container spacing={2}>
      <Grid item justify='flex-start' sm={6}>
        <Typography component='legend'>{props.name}</Typography>
      </Grid>
      <Grid item justify='flex-end' sm={1}>
        <Typography color='textSecondary' component='legend'>
          {props.yearsOfExperience}yrs
        </Typography>
      </Grid>

      <MaterialRating
        name='skill-level'
        getLabelText={() => props.level}
        value={props.rating}
        readOnly
        precision={1}
        size='large'
      />
    </Grid>
  );
};

export default Rating;
