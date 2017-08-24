import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCart } from '../actions';

class CartWidget extends Component {
    componentWillMount() {
        this.props.getCart();
    }
    renderAmount() {
        const { items } = this.props;
        if (items) {
            return (Object.keys(items).length);
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
    const { items } = cart;
    return { items };
}

export default connect(mapStateToProps, { getCart })(CartWidget);