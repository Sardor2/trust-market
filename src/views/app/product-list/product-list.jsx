import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductCard from "../../../components/product-card";
import Spinner from "../../../components/spinner";
import useProducts from "../../../services/queries/use-products";

const ProductList = () => {
  const { data, isLoading } = useProducts();
  return (
    <div>
      <Typography variant="h3">Products </Typography>
      <Spinner isLoading={isLoading}>
        <Box sx={{ marginTop: 2 }}>
          <Grid container spacing={0}>
            {data?.map((item) => (
              <Grid item marginTop={2} md={3} key={item.id}>
                <ProductCard {...item} image={item?.image} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Spinner>
    </div>
  );
};

export default ProductList;
