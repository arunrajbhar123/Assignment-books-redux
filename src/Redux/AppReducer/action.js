import * as types from "./action.type.js";
import axios from "axios";

export const getBooks = (payload) => (dispatch) => {
  dispatch({ type: types.GET_BOOK_LIST_REQUEST });
  axios
    .get("/books",payload)
    .then((res) =>
      dispatch({ type: types.GET_BOOK_LIST_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_BOOK_LIST_FAILURE }));
};


// export const addBooksRequest=()=>({type:types.ADD_BOOK_LIST_REQUEST})
// export const addBooksSuccess=(payload)=>({type:types.ADD_BOOK_LIST_SUCCESS,payload})
// export const addBooksFailure=()=>({type:types.ADD_BOOK_LIST_FAILURE})