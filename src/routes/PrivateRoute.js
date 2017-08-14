import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spinner } from '../components/common';
import { getLoggedInState } from '../actions';
class PrivateRoute extends Component {
  componentWillMount() {
    this.props.getLoggedInState();
  }

  render() {
    const { loading, loggedIn } = this.props;

    // Display a spinner while data is loading 
    // This prevets also an unwanted redirect before data about user login status is received
    if (loading) {
      return (<Spinner />);
    }

    // Redirect if user is not logged in
    if (loggedIn === false) {
      return (
        <Redirect to={{
          pathname: '/login',
          state: { from: this.props.location }
        }} />
      )
    }

    // Display component if user is logged in
    return (
      <Route {...this.props} />
    )
  }
}

function mapStateToProps({ auth }) {
  const { loading, loggedIn } = auth;
  return { loading, loggedIn }
}
export default connect(mapStateToProps, { getLoggedInState })(PrivateRoute);
