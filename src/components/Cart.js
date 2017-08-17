import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCart } from '../actions';

class Cart extends Component {
  componentWillMount(){
    this.props.getCart();
    const { cart } = this.props;
    console.log(cart); 
  }
  
  renderCart(){
    
  }
  render() {
    return (
      <Row>
        <Col>
        <Panel bsStyle="info" header="Cart">
      Your cart is empty...
    </Panel>
      </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return { 
    cart: cart.cart
  };
}

export default connect(mapStateToProps, { getCart })(Cart);
