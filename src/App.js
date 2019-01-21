import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import './config/reactotron';

import GlobalStyle from './styles/global';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LastLocationProvider>
        <GlobalStyle />
        <Routes />
      </LastLocationProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
