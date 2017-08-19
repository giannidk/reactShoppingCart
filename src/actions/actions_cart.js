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


export const addToCart = (cart = {}, item) => {
  return (dispatch) => {
    // search if the item is already in the cart
    let updatedCart = {}
    let qty = 1;
    
    console.log('PROD: ', cart.hasOwnProperty(item._id));
    // If the item is already in cart, increase quantity 
    if (cart.hasOwnProperty(item._id)) {
      qty += cart[item._id].quantity;
    }
    console.log('QTY:', qty);
    // Add item to cart
    updatedCart = { ...cart, [item._id]: { "title": item.title, "price": item.price, "quantity": qty }};

      dispatch({
        type: ADD_TO_CART,
        payload: updatedCart
      });
  }
}

