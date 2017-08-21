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
  let updatedCart = {...cart};
  updatedCart[item._id].quantity > 1 ? updatedCart[item._id].quantity -= 1 : updatedCart[item._id].quantity;
  return(dispatch) => {
    dispatch({
      type: REMOVE_ONE_FROM_CART,
      payload: updatedCart
    })
  }
}

export const deleteFromCart = (cart = {}, item) => {
    let updatedCart = {...cart}
    delete updatedCart[item._id];
    return (dispatch) => {
      dispatch({
        type: DELETE_FROM_CART,
        payload: updatedCart
      })
    }
}

