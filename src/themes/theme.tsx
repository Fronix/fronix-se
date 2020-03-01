import { createMuiTheme } from '@material-ui/core/styles';
import { Shadows } from '@material-ui/core/styles/shadows';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const getTheme = (prefersDarkMode: boolean) =>
  createMuiTheme({
    typography: {
      fontFamily: 'monospace'
    },
    palette: {
      type: prefersDarkMode ? 'dark' : 'light'
    },
    overrides: {
      ...muiLinkOverride(prefersDarkMode),
      MuiGrid: {
        root: {
          borderBlockColor: 'hotpink'
        }
      }
    },
    shadows: new Array(25).fill('none') as Shadows // Remove all box-shadows
  });

const muiLinkOverride = (darkMode: boolean): ThemeOptions['overrides'] => {
  return darkMode
    ? {
        MuiLink: {
          root: {
            color: '#aba9ff'
          }
        }
      }
    : {};
};

export default getTheme;
