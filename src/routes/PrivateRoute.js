import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = rest;
  console.log(loggedIn);
  return(

     



<Route {...rest} render={props => (
  loggedIn ? (<Component {...props}/>) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
  )}/> 
  
    )
}

function mapStateToProps({auth}){
    return {
        loggedIn: auth.loggedIn
    }
}
export default connect(mapStateToProps)(PrivateRoute);
