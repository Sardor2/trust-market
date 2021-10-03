import { useSnackbar } from "notistack";
import { useMutation } from "react-query";
import api from "../api";

const useCreateProduct = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation((data) => api.post("/product/create/", data), {
    onSuccess() {
      enqueueSnackbar("Successfully created product!");
    },
  });
};

export default useCreateProduct;
