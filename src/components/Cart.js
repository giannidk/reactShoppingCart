import _ from 'lodash';
import React, { Component } from 'react';
import { Row, Col, Panel, ListGroup, ListGroupItem, Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCart } from '../actions';

class Cart extends Component {
  componentWillMount(){
    this.props.getCart();
  }
  
  renderCart(){
    const { cart } = this.props;
    console.log(cart);    
    if( !cart ){
      return(<ListGroupItem className="text-info">Your cart is empty</ListGroupItem>);
    }
    return _.map(cart, (item, key) => {
      return(
        <ListGroupItem key={key}>{item.title}
          <br />Qty: <Label bsStyle="success">{item.quantity}</Label></ListGroupItem>
      )
    })
  }
  render() {
    return (
      <Row>
        <Col>
        <Panel bsStyle="success" header="Cart">
          <ListGroup>
      {this.renderCart()}
      </ListGroup>
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
