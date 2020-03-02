import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Work } from '../../types/GitConnectTypes';
import { format } from 'date-fns';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345
    },
    workLocation: {
      marginLeft: '4px',
      color: theme.palette.grey[400]
    }
  })
);

type WorkCardProps = {
  props: Work;
};

const WorkCard = ({ props }: WorkCardProps) => {
  const classes = useStyles();
  const workTime = props.endDate
    ? `${format(new Date(props.startDate), 'MMM yyyy')} to ${format(
        new Date(props.endDate),
        'MMM-yyyy'
      )}`
    : `${format(new Date(props.startDate), 'MMM yyyy')} to Present`;

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => window.open(props.website, '_blank')}>
        <CardMedia
          width='130'
          height='130'
          component='img'
          src={props.companyLogo}
          alt={props.company}
          title={props.company}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.company}
          </Typography>
          <div style={{ display: 'flex' }}>
            <Typography variant='body2' component='p'>
              {props.position}
            </Typography>
            <Typography
              className={classes.workLocation}
              variant='caption'
              color='textSecondary'
              component='legend'
            >
              {props.location}
            </Typography>
          </div>
          <Typography variant='body2' color='textSecondary' component='p'>
            {workTime}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WorkCard;
