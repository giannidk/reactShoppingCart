import {
  GET_CART,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  DELETE_FROM_CART,
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
    updatedCart = { ...cart, [item._id]: { ...item, "quantity": qty }};

      dispatch({
        type: ADD_TO_CART,
        payload: updatedCart
      });
  }
}

export const removeOneFromCart = (cart = {}, item) => {
  cart[item._id].quantity > 1 ? cart[item._id].quantity -= 1 : cart[item._id].quantity;
    let updatedCart = {...cart};
  return(dispatch) => {
    dispatch({
      type: REMOVE_ONE_FROM_CART,
      payload: updatedCart
    })
  }
}

export const deleteFromCart = (cart = {}, item) => {
    delete cart[item._id];
    let updatedCart = {...cart}
    return (dispatch) => {
      dispatch({
        type: DELETE_FROM_CART,
        payload: updatedCart
      })
    }
}

