import {
  GET_CART,
  ADD_TO_CART,
} from './types';


export const getCart = (cart) => {
  return (dispatch) => {
    dispatch({
      type: GET_CART
    });
  }
}


export const addToCart = (cart, book) => {
  return (dispatch) => {
    let updatedCart = { ...cart, [book._id]: {book}};
    dispatch({
      type: ADD_TO_CART,
      payload: updatedCart
    });
  }
}

