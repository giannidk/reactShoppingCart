import _ from 'lodash';
import React, { Component } from 'react';
import { Row, Col, Panel, ListGroup, ListGroupItem, Button, ButtonGroup, Label, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCart, addToCart, removeOneFromCart, deleteFromCart } from '../actions';

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }
  }

  componentWillMount() {
    this.props.getCart();
  }

  openModal(){
    this.setState({ showModal: true})
  }
  closeModal(){
    this.setState({ showModal: false})
  }

  addToCart(item) {
    const { cart, cartTotal } = this.props;
  console.log(cart, cartTotal);
  
    this.props.addToCart(cart, cartTotal, item);
  }

  deleteFromCart(item) {
    const { cart } = this.props;
    this.props.deleteFromCart(cart, item);
  }
  removeOneFromCart(item) {
    const { cart } = this.props;
    this.props.removeOneFromCart(cart, item);
  }

  renderCart() {
    const { cart } = this.props;
    if (!cart) {
      return (<ListGroupItem className="text-info">Your cart is empty</ListGroupItem>);
    }
    return _.map(cart, (item, key) => {
      return (
        <ListGroupItem key={key}>{item.title}
          <br />Price (Per Unit): {item.price}
          <div className="pull-right">
            Qty: <Label bsStyle="info">{item.quantity}</Label>
            <ButtonGroup bsSize="xsmall" className="pull-right" style={{ 'marginLeft': '10px' }}>
              <Button onClick={this.removeOneFromCart.bind(this, item)}>-</Button>
              <Button onClick={this.addToCart.bind(this, item)}>+</Button>
              <Button bsStyle="danger" bsSize="xsmall" style={{ 'marginLeft': '4px' }} onClick={this.deleteFromCart.bind(this, item)}>Delete</Button>
            </ButtonGroup>
          </div>
          <div className="clearfix"></div>
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
            <div className="pull-right">
              <h5>Cart Total: {this.props.cartTotal}</h5>
              <Button bsSize="small" onClick={this.openModal.bind(this)}>Proceed to checkout</Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Thank you for your order</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Your order has been received.</h4>
                <p>You will receive an email confirmation ...</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.closeModal.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Panel>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart: cart.cart,
    cartTotal: cart.cartTotal
  };
}

export default connect(mapStateToProps, { getCart, addToCart, removeOneFromCart, deleteFromCart })(Cart);
