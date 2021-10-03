import { useQuery } from "react-query";
import api from "../api";

const useCategories = () =>
  useQuery("categories", () =>
    api.get("/product/category/").then((res) => res.data)
  );
export default useCategories;
