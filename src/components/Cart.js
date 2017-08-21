import _ from 'lodash';
import React, { Component } from 'react';
import { Row, Col, Panel, ListGroup, ListGroupItem, Button, ButtonGroup, Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCart, addToCart, removeOneFromCart, deleteFromCart } from '../actions';

class Cart extends Component {
  componentWillMount() {
    this.props.getCart();
  }

  addToCart(item){
    const { cart } = this.props;
    this.props.addToCart(cart, item);
  }
  
  deleteFromCart(item){
    const { cart } = this.props;
    this.props.deleteFromCart(cart, item);
  }
  removeOneFromCart(item){
    const { cart } = this.props;
    this.props.removeOneFromCart(cart, item);
  }

  renderCart() {
    const { cart } = this.props;
    console.log(cart);
    if (!cart) {
      return (<ListGroupItem className="text-info">Your cart is empty</ListGroupItem>);
    }
    return _.map(cart, (item, key) => {
      console.log('ITEM: ', item);
      return (
        <ListGroupItem key={key}>{item.title}
          <br />Price (Per Unit): {item.price}
          <div className="pull-right">
            Qty: <Label bsStyle="info">{item.quantity}</Label>
          <ButtonGroup bsSize="xsmall" className="pull-right"  style={{'marginLeft': '10px'}}>
            <Button onClick={this.removeOneFromCart.bind(this, item)}>-</Button>
            <Button onClick={this.addToCart.bind(this, item)}>+</Button>
            <Button bsStyle="danger" bsSize="xsmall" style={{'marginLeft': '4px'}} onClick={this.deleteFromCart.bind(this, item)}>Delete</Button>
          </ButtonGroup>
            </div>
          
          </ListGroupItem>
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

export default connect(mapStateToProps, { getCart, addToCart, removeOneFromCart, deleteFromCart })(Cart);
