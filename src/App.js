import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { Provider } from  'react-redux';
import { createStore, applyMiddleware } from  'redux';
import ReduxThunk from  'redux-thunk';

import './css/App.css';
import reducers from './reducers';
import { Topnav } from './components/common';
import Login from './routes/login';
import Dashboard from './routes/dashboard';
import Settings from './routes/settings';
class App extends Component {
  render() {
    const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Grid>
      <Topnav />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/settings" component={Settings} />
            <Route path="/" component={Login} />
          </Switch>
        </Grid>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
