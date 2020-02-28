import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import GlobalCss from './themes/globalCss';
import getTheme from './themes/theme';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => getTheme(prefersDarkMode), [prefersDarkMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalCss />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
