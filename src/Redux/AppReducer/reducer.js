import * as types from "./action.type.js";

const initalState = {
  books: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.GET_BOOK_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.GET_BOOK_LIST_SUCCESS:
      return {
        ...state,
        books: payload,
        isLoading: false,
        isError: false,
      };

    case types.GET_BOOK_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


    //   case types.ADD_BOOK_LIST_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isError: false,
    //   };

    // case types.ADD_BOOK_LIST_SUCCESS:
    //   return {
    //     ...state,
    //     books: payload,
    //     isLoading: false,
    //     isError: false,
    //   };

    // case types.ADD_BOOK_LIST_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //   };


    default:
      return state;
  }
};
