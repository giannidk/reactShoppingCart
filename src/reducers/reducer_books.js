import { 
  SEARCH_TERM_CHANGED,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL
} from '../actions/types';


const INITIAL_STATE = {
  searchTerm: '',
  loading: false,
  error: false,
  books:{
    "01": {"_id": "ID001", "isbn": "12345", "title": "Ciccio book", "price": "33.50"},
    "02": {"_id": "ID002", "isbn": "67890", "title": "Bombo book", "price": "21.50"},
    "03": {"_id": "ID003", "isbn": "55667", "title": "Cannoniere book", "price": "45"},
  }
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BOOKS:
    return { ...state, loading: true };
    case GET_BOOKS_SUCCESS:
      return { ...state, loading: false };
    case GET_BOOKS_FAIL:
      return { ...state, loading: false, error: action.error };
    case SEARCH_TERM_CHANGED:
      return { ...state, searchTerm: action.payload };  
    default:
      return state;
  }
};
