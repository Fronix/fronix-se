import React, { useMemo, FC } from 'react';
import { useStoreState } from '../store';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import getTheme from './theme';

const ThemeProvider: FC = ({ children }) => {
  const { prefersDarkMode } = useStoreState(state => state.themeSettings);
  const theme = useMemo(() => getTheme(prefersDarkMode), [prefersDarkMode]);

  if (process.env.NODE_ENV === 'development') {
    (window as any).theme = theme; // Expose the theme globally, for easier debugging.
  }

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
export default ThemeProvider;
