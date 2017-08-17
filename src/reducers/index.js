import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './reducer_auth';
import BooksReducer from './reducer_books';
import CartReducer from './reducer_cart';

const RootReducer = combineReducers ({
    appData: () => [],
    books: BooksReducer,
    cart: CartReducer,
    auth: AuthReducer,
    form: formReducer
})

export default RootReducer;
