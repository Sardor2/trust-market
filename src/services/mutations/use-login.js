import { useSnackbar } from "notistack";
import { useMutation } from "react-query";
import { login } from "../../state/auth/auth.actions";
import { useAuth } from "../../state/auth/auth.context";
import api from "../api";

const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { authDispatch } = useAuth();
  return useMutation(
    (data) => api.post("/account/login/", data).then((res) => res.data),
    {
      onError() {
        enqueueSnackbar("User not found!", {
          variant: "error",
        });
      },
      onSuccess({ access, refresh, user_type, id }) {
        authDispatch(
          login({
            refreshToken: refresh,
            accessToken: access,
            userId: id,
            userType: user_type,
          })
        );
      },
    }
  );
};

export default useLogin;
