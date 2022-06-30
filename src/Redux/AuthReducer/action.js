import * as types from "./action.type.js";
import { useDispatch } from "react-redux";
import axios from "axios";

export const getAuth = (payload) => (dispatch) => {
  dispatch({ type: types.GET_AUTH_REQUEST });
  return axios({
    method: "post",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  })
    .then((res) =>
     dispatch({ type: types.GET_AUTH_SUCCESS, payload: res.data.token })
    )
    .catch((err) => dispatch({ type: types.GET_AUTH_FAILURE }));
};
