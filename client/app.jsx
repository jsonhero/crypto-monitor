import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/create-store';
import Root from './pages/root';

export default () => (
  <Router>
    <Provider store={store}>
      <Root />
    </Provider>
  </Router>
);
