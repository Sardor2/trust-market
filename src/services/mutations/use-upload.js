import { useSnackbar } from "notistack";
import React from "react";
import { useMutation } from "react-query";
import api from "../api";

const useUpload = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    (file) => {
      const fd = new FormData();
      fd.append("media", file);
      return api.post("/upload-image/", fd).then((res) => res.data);
    },
    {
      onSuccess() {
        enqueueSnackbar("Upload image!", {
          variant: "info",
          autoHideDuration: 2000,
        });
      },
    }
  );
};

export default useUpload;
