import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import CustomButton from "../../../components/button";

export const ImageWrapper = styled(Box)`
  border-radius: 8px;
  background-color: ${(props) => props.theme.bg.lighter};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
  }
`;

export const BuyButton = styled(CustomButton)`
  margin-top: 50px;
  margin-left: auto;
  /* padding: auto 50px; */
`;
