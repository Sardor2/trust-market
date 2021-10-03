import { useReducer } from "react";
import {
  getStorage,
  removeStorage,
  setStorage,
} from "../../utils/storage.utils";
import authActionTypes from "./auth.types";

export const intialState = {
  firstName: "",
  lastName: "",
  accessToken: getStorage("accessToken"),
  refreshToken: getStorage("refreshToken"),
  userId: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN:
      setStorage("accessToken", action.payload.accessToken);
      setStorage("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        ...action.payload,
      };
    case authActionTypes.LOGOUT:
      removeStorage("accessToken");
      removeStorage("refreshToken");
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
      };
    default:
      return state;
  }
};

const useAuthReducer = () => {
  const [authState, dispatch] = useReducer(authReducer, intialState);
  return { authState, dispatch };
};

export default useAuthReducer;
