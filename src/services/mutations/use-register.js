import { useSnackbar } from "notistack";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import ROUTES from "../../config/routes.config";
import api from "../api";

const useRegister = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  return useMutation((data) => api.post("/account/register/", data), {
    onError() {
      enqueueSnackbar("User with this phone number exists!", {
        variant: "warning",
      });
    },
    onSuccess() {
      enqueueSnackbar("Successfully registered!", {
        variant: "success",
        autoHideDuration: 2000,
      });
      history.push(ROUTES.auth.login);
    },
  });
};

export default useRegister;
