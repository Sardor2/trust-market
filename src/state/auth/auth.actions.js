import authActionTypes from "./auth.types";

export const login = (data) => ({
  type: authActionTypes.LOGIN,
  payload: {
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    userId: data.userId,
    userType: data.userType,
  },
});

export const logout = () => ({
  type: authActionTypes.LOGOUT,
});
