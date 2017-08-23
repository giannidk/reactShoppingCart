import { 
  GET_CART,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  DELETE_FROM_CART,
  CART_TOTAL,
} from '../actions/types';


const INITIAL_STATE = {
  searchTerm: '',
  loading: false,
  error: false,
  cartTotal: 0,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) { 
    case ADD_TO_CART:
      return { ...state, cart: action.payload, cartTotal: action.cartTotal }; 
    case REMOVE_ONE_FROM_CART:
      return { ...state, cart: action.payload, cartTotal: action.cartTotal }; 
    case DELETE_FROM_CART:
      return { ...state, cart: action.payload, cartTotal: action.cartTotal }; 
    case GET_CART:
      return { ...state }; 
    default:
      return state;
  }
};


