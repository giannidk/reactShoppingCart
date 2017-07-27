import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../firebase';
import { getLoggedInState } from '../actions';

//const PrivateRoute = ({ component: Component, ...rest }) => {
class PrivateRoute extends Component {

//}
  

  componentWillMount(){
    console.log(this.props)
    auth.onAuthStateChanged(user => {
      if(user){this.props.getLoggedInState()}
      //else{}
    })
  }

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
export default connect(mapStateToProps, { getLoggedInState })(PrivateRoute);
