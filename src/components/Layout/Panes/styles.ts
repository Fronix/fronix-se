import { makeStyles, Theme, createStyles } from '@material-ui/core';

const paneStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      backgroundColor: 'transparent',
    },
    sixty: {
      margin: '0 auto',
      width: '60%'
    },
    paperBorder: {
      //border: '2px solid #844f01',
      //transform: 'translate(0, -14rem)'
    },
    paper: {      //transform: 'translate(0, -14rem)'
    },
    simpleViewButton: {
      position: 'absolute',
      top: 0,
      left: 0,
      margin: '0.4rem'
    }
  })
});

export { paneStyles };
