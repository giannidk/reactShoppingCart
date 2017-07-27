import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../firebase';

class PrivateRoute extends Component {


  render() {
    const { loggedIn } = this.props;
    console.log(loggedIn);


    


    if (loggedIn !== true) {
      return (
        <Redirect to={{
          pathname: '/login',
          state: { from: this.props.location }
        }} />
      )
    }
    return (
      <Route {...this.props} />
    )
  }


}



function mapStateToProps({auth}){
    return {
        loggedIn: auth.loggedIn
    }
}
export default connect()(PrivateRoute);
