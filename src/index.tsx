import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import GlobalCss from './themes/globalCss';
import { StoreProvider } from 'easy-peasy';
import store from './store';
import ThemeProvider from './themes/ThemeProvider';
import packageJson from '../package.json';
import Axios from 'axios';

const App = () => {
  const consoleText = Axios.get(
    `https://gist.githubusercontent.com/Fronix/ad142871aecd0e3dd499a32d08c53c77/raw/3d78a5409b325ba0a0a6a93055f237a673255853/consoleLoad.txt`
  );

  useEffect(() => {
    consoleText.then(res => {
      console.log(res.data);
      console.log(
        `%cVersion: ${packageJson.version}`,
        'color: #66D9EF; font-size: 24px; font-family: Monospace;'
      );
    });
  }, [consoleText]);

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
