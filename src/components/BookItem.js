import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

const BookItem = ({ book, onClick }) => {
  return (    
    <Panel>
       <h5>{book.title}</h5>
      <h6>ISBN: {book.isbn}</h6>
      <h6>Price: {book.price}</h6>
      <Button bsStyle="success" bsSize="small" onClick={onClick}>Add to cart</Button> 
    </Panel>
  );
}

export default BookItem;
