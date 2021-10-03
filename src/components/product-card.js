import { Typography } from "@mui/material";
import MuiCard from "@mui/material/Card";
import Box from "@mui/material/Box";

import React from "react";
import { Link, useHistory } from "react-router-dom";
import defaultImage from "../assets/default-image.jpg";
import ROUTES from "../config/routes.config";
import styled from "@emotion/styled";
import { width } from "@mui/system";

const Card = styled(MuiCard)`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  &:hover img {
    transform: scale(0.8);
  }
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    transition: all 0.4s cubic-bezier(1, 0, 0, 1);
  }
`;

const Details = styled(Box)`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled((props) => (
  <Typography {...props} variant="subtitle2">
    {props.children}
  </Typography>
))`
  font-size: 20px;
  text-align: right;
`;

const ProductCard = ({ image, name, price, id }) => {
  const history = useHistory();
  return (
    <Card onClick={() => history.push(`${ROUTES.app.product}/${id}`)}>
      <img src={image ?? defaultImage} alt={name} />
      <Details>
        <Typography variant="subtitle1" component="span">
          {name}
        </Typography>
        <Price> {price}$</Price>
      </Details>
    </Card>
  );
};

export default ProductCard;
