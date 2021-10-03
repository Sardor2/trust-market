import { Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import defaultImage from "../../../assets/default-image.jpg";
import Spinner from "../../../components/spinner";
import useProduct from "../../../services/queries/use-product";
import { BuyButton, ImageWrapper } from "./styles";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useProduct(id);
  return (
    <Spinner isLoading={isLoading}>
      <Grid container spacing={2}>
        <Grid sm={5} item>
          <ImageWrapper>
            <img src={data?.image ?? defaultImage} alt="" />
          </ImageWrapper>
        </Grid>
        <Grid sm={6} item>
          <Typography variant="h3">{data?.name}</Typography>
          <Typography varian="subtitle2" color="GrayText">
            {data?.description}
          </Typography>
          <Typography variant="h5" component="div">
            {data?.price} $
          </Typography>
          <Typography>Category: {data?.category_name}</Typography>
          <BuyButton variant="outlined">Buy</BuyButton>
        </Grid>
      </Grid>
    </Spinner>
  );
};

export default ProductDetail;
