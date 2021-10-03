import { useQuery } from "react-query";
import api from "../api";

const useProducts = () =>
  useQuery("products", () => api.get("/product/").then((res) => res.data));
export default useProducts;
