import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { Provider, connect } from  'react-redux';

import './css/App.css';
import './css/spinner.css';
import { Topnav } from './components/common';
import PrivateRoute from './routes/PrivateRoute';
import Login from './routes/login';
import Dashboard from './routes/dashboard';
import Settings from './routes/settings';
import { setLoggedInState, getLoggedInState } from './actions';

class App extends Component {
  state = { loggedIn: null }
    componentWillMount(){
     this.props.getLoggedInState();
  }   
  
  render() {
    const { store, loggedIn } = this.props;
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Grid>
      <Topnav loggedIn={loggedIn} />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
        </Grid>
      </BrowserRouter>
      </Provider>
    );
  }
}

function mapStateToProps({ auth }){
  const { loading, loggedIn } = auth;
  return { loading, loggedIn }
}

export default connect(mapStateToProps, { setLoggedInState, getLoggedInState })(App);
