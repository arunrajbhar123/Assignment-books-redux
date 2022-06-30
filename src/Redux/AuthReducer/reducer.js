import * as types from "./action.type.js";
import {loadData,saveData} from "../../localStore/localstorage.js";
const initalState = {
  isAuth: loadData("isAuth") || false,
  token: loadData("token") || "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.GET_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_AUTH_SUCCESS:
      saveData("isAuth",true)
      saveData("token",payload)
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_AUTH_FAILURE:
      saveData("isAuth",false)
      saveData("token","")
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: "",
        isAuth: false,
      };

    default:
      return state;
  }
};
