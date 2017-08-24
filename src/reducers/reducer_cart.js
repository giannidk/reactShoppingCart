import { 
  GET_CART,
  UPDATE_CART,
} from '../actions/types';


const INITIAL_STATE = {
  searchTerm: '',
  loading: false,
  error: false,
  cartTotal: 0,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) { 
    case UPDATE_CART:
      return { ...state, items: action.payload, cartTotal: action.cartTotal }; 
    /* case UPDATE_CART:
      return { ...state, cart: action.payload, cartTotal: action.cartTotal };  */
    case GET_CART:
      return { ...state }; 
    default:
      return state;
  }
};


