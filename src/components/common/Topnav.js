import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { 
  Navbar, 
  Nav, 
  NavItem,
 } from 'react-bootstrap';

class Topnav extends Component{  
  
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">React Auth</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                   <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/dashboard">
                    <NavItem>Dashboard</NavItem>
                  </LinkContainer>
                  
                 
                  
                  
                  
                </Nav>
                <Nav pullRight>
                  <LinkContainer to="/setting">
                    <NavItem>Settings</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
    }
}

export { Topnav };
