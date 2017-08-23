import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCart } from '../actions';

class CartWidget extends Component {
    componentWillMount() {
        this.props.getCart();
    }
    renderAmount() {
        const { cart } = this.props;
        if (cart) {
            return (Object.keys(cart).length);
        }
        return 0;
    }
    render() {
        return (
            <div>Your Cart<sup><Label bsStyle="danger" style={{ 'borderRadius': '100px', 'marginLeft': '4px' }}>{this.renderAmount()}</Label></sup>
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => {
    return {
        cart: cart.cart
    }
}

export default connect(mapStateToProps, { getCart })(CartWidget);