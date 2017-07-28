import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../firebase';

class PrivateRoute extends Component {

  render() {
    const { loggedIn, loading, user } = this.props;
    console.log(loggedIn, user);

    if (loading) {
      return (<div>Loading...</div>);
    }

    if (!loggedIn) {
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

function mapStateToProps({ auth }) {
  return {
    loggedIn: auth.loggedIn,
    loading: auth.loading,
    user: auth.user
  }
}
export default connect(mapStateToProps)(PrivateRoute);
