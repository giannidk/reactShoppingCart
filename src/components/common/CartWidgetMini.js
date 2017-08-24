import React from 'react';
import { Label } from 'react-bootstrap';

const CartWidgetMini = ({ items }) => {
    let itemsCount = 0;
    if (items) {
        itemsCount = Object.keys(items).length;
    }
    return (
        <div>Your Cart<sup><Label bsStyle="danger" style={{ 'borderRadius': '100px', 'marginLeft': '4px' }}>{itemsCount}</Label></sup>
        </div>
    );
}

export { CartWidgetMini };