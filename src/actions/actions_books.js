import { 
  //SEARCH_TERM_CHANGED,
  //GET_BOOKS,
  GET_BOOKS_SUCCESS,
  //GET_BOOKS_FAIL,
} from './types';



export const getBooks = () => {
  return (dispatch) => {
    dispatch({ type: GET_BOOKS_SUCCESS });   
}
}

