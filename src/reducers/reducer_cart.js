import { 
  GET_CART,
  ADD_TO_CART,
} from '../actions/types';


const INITIAL_STATE = {
  searchTerm: '',
  loading: false,
  error: false,
  cart: {},
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) { 
    case ADD_TO_CART:
      console.log(action.payload);
      return { ...state, cart: action.payload }; 
    case GET_CART:
      return { ...state }; 
    default:
      return state;
  }
};
