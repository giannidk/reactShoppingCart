import {
  GET_CART,  
  UPDATE_CART,
} from './types';


export const getCart = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CART
    });
  }
}

export const addToCart = (cart = {}, cartTotal = 0, item) => {

  return (dispatch) => {
    let updatedCart = {}
    let qty = 1;

    // If the item is already in cart, increase quantity 
    if (cart.hasOwnProperty(item._id)) {
      qty += cart[item._id].quantity;
    }
    // Add item to cart
    updatedCart = { ...cart, [item._id]: { ...item, "quantity": qty } };

    // call helper function for diapatch
    updateCart(dispatch, updatedCart);
  }
}

export const removeOneFromCart = (cart = {}, item) => {
  let updatedCart = { ...cart };
  updatedCart[item._id].quantity > 1 ? updatedCart[item._id].quantity -= 1 : updatedCart[item._id].quantity;
  return (dispatch) => {
    // call helper function for diapatch
    updateCart(dispatch, updatedCart);
  }
}

export const deleteFromCart = (cart = {}, item) => {
  let updatedCart = { ...cart }
  delete updatedCart[item._id];
  return (dispatch) => {
    // call helper function for diapatch
    updateCart(dispatch, updatedCart);
  }
}

const updateCart = (dispatch, updatedCart) => {
  console.info(updatedCart);
  dispatch({
    type: UPDATE_CART,
    payload: updatedCart,
    cartTotal: makeCartTotal(updatedCart),
  })
}
const makeCartTotal = (cart) => {
  let totalCart = 0;
  Object.keys(cart).forEach(key => {
    totalCart += parseFloat(cart[key].price, 10) * parseFloat(cart[key].quantity, 10);
  });
  return (totalCart);
}