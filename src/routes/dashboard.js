import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class Dashboard extends Component {

  componentWillMount(){
   // console.log(this.props);
  }

  onLogoutClick(){
  this.props.logoutUser();
}


    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                {/* <h3>{this.props.user.email}</h3> */}
                <br />
                <br />
                <br />
                <button type="button" className="btn btn-warning" style={{marginLeft: 5}} onClick={this.onLogoutClick.bind(this)}>Log out</button>
                
            </div>
        );
    }
}

function mapStateToProps({ auth }){
  return {
    user: auth.user
  }
}

export default connect(mapStateToProps, {logoutUser})(Dashboard);
