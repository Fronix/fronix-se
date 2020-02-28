import { makeStyles, Theme, createStyles } from '@material-ui/core';

const paneStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(2, 1)
    }
  })
);

export { paneStyles };
