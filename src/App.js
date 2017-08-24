import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { Provider, connect } from  'react-redux';

import './css/App.css';
import './css/spinner.css';
import { Topnav } from './components/common';
import BooksList from './routes/BooksList';
import BooksAdd from './routes/BooksAdd';
import Cart from './routes/Cart';
//import { setLoggedInState, getLoggedInState } from './actions';
import { getCart } from './actions';

class App extends Component {
  state = { loggedIn: null }
    componentWillMount(){
     //this.props.getLoggedInState();
     this.props.getCart();
  }   
  
  render() {
    const { store, loggedIn, items } = this.props;
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Grid>
      <Topnav loggedIn={loggedIn} items={items} />
      
        <Switch>
          <Route path="/booksList" component={BooksList} />
          <Route path="/booksAdd" component={BooksAdd} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={BooksList} />
        </Switch>
        
        </Grid>
      </BrowserRouter>
      </Provider>
    );
  }
}

function mapStateToProps({ auth, cart }){
  const { loading, loggedIn } = auth;
  const { items } = cart;
  return { loading, loggedIn, items }
}

export default connect(mapStateToProps, { getCart })(App);
