import _ from 'lodash';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getBooks, addToCart } from '../actions/';
import BookItem from '../components/BookItem';
import BooksForm from '../components/BooksForm';

class BooksList extends Component {
  componentWillMount() {  
    this.props.getBooks();
  }

  addToCart(book){
    const { cart, cartTotal } = this.props;
    this.props.addToCart(cart, cartTotal, book);
  }

  renderList() {
    const { booksList } = this.props;
    return _.map(booksList, (book, key) => {
      return (  
          <Col key={key} xs={12} sm={6} md={4}>    
        <BookItem book={book} onClick={this.addToCart.bind(this, book)} />
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
        <Col xs={12}>
            <Cart />
        </Col>
        </Row>
        <Row>  
          <Col xs={12} sm={6} md={4}>
          <BooksForm />
          </Col>        
            {this.renderList()}
      </Row>
      </div>
    );

  }
}

const mapStateToProps = ({books, cart}) => {
  console.log(books.books);
  return { 
    booksList: books.books,
    cart: cart.cart,
    cartTotal: cart.cartTotal,
  };
}

export default connect(mapStateToProps, { getBooks, addToCart })(BooksList);
