import { 
  //SEARCH_TERM_CHANGED,
  //GET_BOOKS,
  GET_BOOKS_SUCCESS,
  POST_BOOK,
  //GET_BOOKS_FAIL,
} from './types';



export const getBooks = () => {
  return (dispatch) => {
    dispatch({ type: GET_BOOKS_SUCCESS });   
}
}

export const postBook = (book) => {
  return (dispatch) => {
    dispatch({type: POST_BOOK, payload: book});
  }
}

