import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Basics } from '../../types/GitConnectTypes';
import CardActions from '@material-ui/core/CardActions';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: '60rem',
      display: 'flex'
    },
    content: {
      width: '70%'
    },
    cover: {
      flex: '1 0 auto',
      height: 'auto'
    },
    topInfo: {
      paddingBottom: 10
    },
    cardActions: {
      padding: '10px 0 0 0',
      display: 'block',
      marginLeft: '-10px'
    },
    divider: {
      margin: '10px 0 3px 0'
    },
    iconButton: {
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    icons: {
      paddingRight: 5
    }
  })
);

type WhoAmIProps = {
  props: Basics;
};

type NetworkIconProps = {
  network: string;
};

const NetworkIcon = ({ network }: NetworkIconProps) => {
  const classes = useStyles();
  switch (network.toLowerCase()) {
    case 'github':
      return <GitHubIcon className={classes.icons} fontSize='small' />;
    case 'gitconnected':
      return <AllInclusiveIcon className={classes.icons} fontSize='small' />;
    default:
      return <></>;
  }
};

const sendEmail = (address: string) => window.open(`mailto:${address}`, '_blank');
const goToLink = (link: string) => window.open(link, '_blank');

const WhoAmI = ({ props }: WhoAmIProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={classes.topInfo}>
          <Typography component='h5' variant='h5'>
            {props.name}
          </Typography>
          <Typography variant='subtitle2' color='textSecondary'>
            {props.headline}
          </Typography>
        </div>
        <Typography variant='body1' color='textPrimary'>
          {props.summary}
        </Typography>
        <Divider className={classes.divider} />
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            className={classes.iconButton}
            onClick={() => sendEmail(props.email)}
            aria-label='Email me'
          >
            <EmailIcon className={classes.icons} fontSize='small' />
            <Typography variant='caption' color='textPrimary'>
              {props.email}
            </Typography>
          </IconButton>
          <IconButton disableRipple className={classes.iconButton} aria-label='Call me'>
            <PhoneIcon className={classes.icons} fontSize='small' />
            <Typography variant='caption' color='textPrimary'>
              {props.phone}
            </Typography>
          </IconButton>
          {props.profiles.map(p => {
            return (
              <IconButton
                onClick={() => goToLink(p.url)}
                className={classes.iconButton}
                aria-label={p.network}
              >
                <NetworkIcon network={p.network} />
                <Typography variant='caption' color='textPrimary'>
                  {p.url.replace('https://', '')}
                </Typography>
              </IconButton>
            );
          })}
        </CardActions>
      </CardContent>
      <CardMedia className={classes.cover} image={props.picture} title={props.name} />
    </Card>
  );
};
export default WhoAmI;
