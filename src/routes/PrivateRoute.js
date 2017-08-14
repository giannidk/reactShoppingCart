import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { auth } from '../firebase';
import { Spinner } from '../components/common';
import { getLoggedInState } from '../actions';
class PrivateRoute extends Component {
  componentWillMount(){
    //alert('Receiving...');
    this.props.getLoggedInState();
  }

  render() {
    const { loading, loggedIn } = this.props;

    if (loading) {
      return (<Spinner />);
    }

    if (loggedIn === false) {
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
  const { loading, loggedIn } = auth;
  return { loading, loggedIn }
}
export default connect(mapStateToProps, { getLoggedInState })(PrivateRoute);
