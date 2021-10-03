import { useAuth } from "../state/auth/auth.context";

const useUserType = () => {
  const { userType } = useAuth();
  return userType;
};

export default useUserType;
