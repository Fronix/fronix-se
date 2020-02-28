import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import GlobalCss from './themes/globalCss';
import getTheme from './themes/theme';
import { StoreProvider } from 'easy-peasy';
import store from './store';
import ThemeProvider from './themes/ThemeProvider';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => getTheme(prefersDarkMode), [prefersDarkMode]);

  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <CssBaseline />
        <GlobalCss />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
