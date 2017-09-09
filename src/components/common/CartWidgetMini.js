import React from 'react';
import { Label } from 'react-bootstrap';

const CartWidgetMini = ({ items }) => {
    let itemsCount = 0;
    let label = '';
    if (items) {
        itemsCount = Object.keys(items).length;
      }
      if(itemsCount > 0 ){
      label = <Label bsStyle="danger" style={{ 'borderRadius': '100px', 'marginLeft': '4px' }}>{itemsCount}</Label>;      
      }
    return (
        <div>Your Cart<sup>
          {label}
          </sup>
        </div>
    );
}

export { CartWidgetMini };
