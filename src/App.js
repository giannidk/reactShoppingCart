import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { Provider, connect } from  'react-redux';

import './css/App.css';
import './css/spinner.css';
import { Topnav } from './components/common';
import BooksList from './routes/BooksList';
//import { setLoggedInState, getLoggedInState } from './actions';

class App extends Component {
  state = { loggedIn: null }
    componentWillMount(){
     //this.props.getLoggedInState();
  }   
  
  render() {
    const { store, loggedIn } = this.props;
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Grid>
      <Topnav loggedIn={loggedIn} />
      
        <Switch>
          <Route path="/BooksList" component={BooksList} />
          <Route path="/" component={BooksList} />
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

export default connect(mapStateToProps)(App);
