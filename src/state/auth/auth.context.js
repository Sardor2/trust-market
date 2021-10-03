import React, { useContext } from "react";
import useAuthReducer from "./auth.reducer";

const authContext = React.createContext();

const AuthProvider = ({ children }) => {
  const { authState, dispatch } = useAuthReducer();

  return (
    <authContext.Provider
      value={{
        ...authState,
        authDispatch: dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

export default AuthProvider;
