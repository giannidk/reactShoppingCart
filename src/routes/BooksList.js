import _ from 'lodash';
import React, { Component } from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getBooks, addToCart } from '../actions/';
//import BookItem from '../componentes/BookItem';

class BooksList extends Component {
  componentWillMount() {  
    this.props.getBooks();
  }

  addToCart(book){
    const { cart } = this.props;
    this.props.addToCart(cart, book);
  }

  renderList() {
    const { booksList } = this.props;
    return _.map(booksList, (book, key) => {
      return (
        <Col key={key} sm={4}>
          <Panel>
            <h5>{book.title}</h5>
            <h6>ISBN: {book.isbn}</h6>
            <h6>Price: {book.price}</h6>
            <Button bsStyle="success" bsSize="small" onClick={this.addToCart.bind(this, book)}>Add to cart</Button>
          </Panel>
        </Col>
      );
    })

  }

  render() {
    const { booksList } = this.props;
    if (!booksList) {
      return (<div>Loading ...</div>)
    }

    return (
      <div>
        <Row>
        <Col sm={12}>
          <h1>Books List</h1>
        </Col>
        </Row>
        <Row>
          <Col sm={9}>
            {this.renderList()}
          </Col>
          <Col sm={3}>
            <Cart />
          </Col>
      </Row>
      </div>
    );

  }
}

const mapStateToProps = ({books, cart}) => {
  return { 
    booksList: books.books,
    cart: cart.cart
  };
}

export default connect(mapStateToProps, { getBooks, addToCart })(BooksList);
