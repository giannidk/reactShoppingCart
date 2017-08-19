import { 
  SEARCH_TERM_CHANGED,
  GET_BOOKS,
  POST_BOOK,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL
} from '../actions/types';


const INITIAL_STATE = {
  searchTerm: '',
  loading: false,
  error: false,
  books:{
    /* "001": {"_id": "001", "isbn": "12345", "title": "Ciccio book", "description": "Lore Impus ciccione dolorem. Ipsus pegasus ciccionem.", "price": "33.50"},
    "002": {"_id": "002", "isbn": "67890", "title": "Bombo book", "description": "Lore Impus ciccione dolorem con iuntam des parolo.", "price": "21.50"},
    "003": {"_id": "003", "isbn": "55667", "title": "Cannoniere book", "description": "Lore Impus ciccione dolorem.", "price": "45"}, */
  }
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_BOOK:
      return { ...state, books: { ...state.books, [action.payload.isbn]: action.payload} };
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
