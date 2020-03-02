import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import GlobalCss from './themes/globalCss';
import { StoreProvider } from 'easy-peasy';
import store from './store';
import ThemeProvider from './themes/ThemeProvider';

const App = () => {
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
