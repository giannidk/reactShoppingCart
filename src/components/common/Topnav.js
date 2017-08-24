import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { 
  Navbar, 
  Nav,
  NavItem
 } from 'react-bootstrap';
import { NavItemLink, CartWidgetMini } from './'

class Topnav extends Component{    
    render() {
      const { loggedIn, items } = this.props;
      if(!loggedIn){
        return(
          <Navbar inverse collapseOnSelect fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <LinkContainer to="/login"><a>React Cart</a></LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItemLink to="/booksList" label="Books List" />
                  <NavItemLink to="/booksAdd" label="Books Add" />
                </Nav>
                <Nav pullRight>                  
                <LinkContainer to="/cart">
                  <NavItem>
                    <CartWidgetMini items={items} />
                  </NavItem>
              </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
      }

        return (
            <Navbar inverse collapseOnSelect fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <LinkContainer to="/dashboard"><a>React Auth</a></LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItemLink to="/login" label="Login" />  
                  <NavItemLink to="/dashboard" label="Dashboard" />                 
                </Nav>
                <Nav pullRight>                  
                  <NavItemLink to="/settings" label="Settings" />
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
    }
}

export { Topnav };
