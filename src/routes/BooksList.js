import _ from 'lodash';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import CartWidgetFull from '../components/CartWidgetFull';
import { getBooks, addToCart } from '../actions/';
import BookItem from '../components/BookItem';
import BooksForm from '../components/BooksForm';

class BooksList extends Component {

  state = {users: []}

  componentWillMount() {  
    this.props.getBooks();
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  addToCart(book){
    const { cart, cartTotal } = this.props;
    this.props.addToCart(cart, cartTotal, book);
  }

  renderList() {
    const { booksList } = this.props;
    return _.map(booksList, (book, key) => {
      return (  
          <Col key={key} xs={12} sm={6} md={4}  style={{'padding': '0 4px'}}>    
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
          <Col xs={12} sm={9} md={9}>
            {this.renderList()}
          </Col>        
          <Col xs={12} sm={3} md={3}>
            <CartWidgetFull />
          <BooksForm />
          </Col>        
      </Row>
      <Row>
      <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </Row>
      </div>
    );

  }
}

const mapStateToProps = ({books, cart}) => {
  console.log(books.books);
  return { 
    booksList: books.books,
    cart: cart.items,
    cartTotal: cart.cartTotal,
  };
}

export default connect(mapStateToProps, { getBooks, addToCart })(BooksList);
