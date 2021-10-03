import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
export const CreateWrapper = styled(Paper)`
  padding: 40px 30px;
  margin: 30px auto;
  background-color: ${(props) => props.theme.bg.light};
  max-width: 80%;
`;

export const UploadBox = styled(Box)`
  border: 2px dashed ${(props) => props.theme.text.light};
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px 0;
  background-image: url(${(props) => props.src});
  background-position: center;
  svg {
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }
`;

export const DeleteButton = styled((props) => (
  <IconButton {...props}>
    <DeleteOutline color="error" />
  </IconButton>
))`
  background-color: white;
`;
