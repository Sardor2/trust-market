import { useQuery } from "react-query";
import api from "../api";

const useProduct = (id) =>
  useQuery(["products", id], () =>
    api.get(`/product/${id}/`).then((res) => res.data)
  );
export default useProduct;
