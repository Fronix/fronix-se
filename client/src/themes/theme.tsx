import { createMuiTheme } from '@material-ui/core/styles';

const getTheme = (prefersDarkMode: boolean) =>
  createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light'
    }
  });

export default getTheme;