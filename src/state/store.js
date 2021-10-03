import AuthProvider from "./auth/auth.context";

const Store = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Store;
