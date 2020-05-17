import React, { useMemo, FC, useEffect } from 'react';
import { useStoreState, useStoreActions } from '../store';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import getTheme from './theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core';

const ThemeProvider: FC = ({ children }) => {
  const { prefersDarkMode } = useStoreState(state => state.themeSettings);
  const setSimpleView = useStoreActions(actions => actions.themeSettings.setSimpleView);
  const theme = useMemo(() => getTheme(prefersDarkMode), [prefersDarkMode]);
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  useEffect(() => {
    if(matches){
      setSimpleView(true)
    } else {
      setSimpleView(false)
    }
  }, [matches])

  if (process.env.NODE_ENV === 'development') {
    (window as any).theme = theme; // Expose the theme globally, for easier debugging.
  }

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
export default ThemeProvider;
