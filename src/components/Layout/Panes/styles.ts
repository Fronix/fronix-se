import { makeStyles, Theme, createStyles } from '@material-ui/core';

const paneStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: '0 auto',
      backgroundColor: 'transparent',
      border: '2px solid #844f01',
      width: '60%'
      //transform: 'translate(0, -14rem)'
    }
  })
);

export { paneStyles };
