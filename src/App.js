import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { Provider, connect } from  'react-redux';
import { createStore, applyMiddleware } from  'redux';
import ReduxThunk from  'redux-thunk';

import './css/App.css';
import { auth } from './firebase';
import reducers from './reducers';
import { Topnav } from './components/common';
import PrivateRoute from './routes/PrivateRoute';
import Login from './routes/login';
import Dashboard from './routes/dashboard';
import Settings from './routes/settings';
import { setLoggedInState } from './actions';

class App extends Component {
    componentWillMount(){
      console.log('USER: ', auth.currentUser)
     auth.onAuthStateChanged((user) => {
      if(user){
        //this.setState({ loggedIn: true });
        this.props.setLoggedInState()
        console.log(user);
      }
      else{
        console.log('NO USER');

      }
    }) 
  }   
  
 
  
  render() {
    const { store, loggedIn } = this.props;
    console.log(loggedIn);
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Grid>
      <Topnav />
           <Switch>
              <PrivateRoute path="/dashboard" loggedIn={loggedIn} component={Dashboard} />
              <Route path="/settings" component={Settings} />
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
  console.log(auth.loggedIn);
  return {
    loggedIn: auth.loggedIn
  }
}


export default connect(mapStateToProps, { setLoggedInState })(App);
