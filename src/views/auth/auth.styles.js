import styled from "@emotion/styled";
import { Paper, TextField } from "@mui/material";

export const StyledPaper = styled(Paper)`
  background: ${(props) => props.theme.bg.light};
  padding: 30px 20px;
  margin: 100px auto 0;
  max-width: 400px;
  button {
    margin-top: 20px;
  }
  form {
    margin-top: 20px;
  }
  h3 {
    text-align: center;
  }
`;

export const StyledInput = styled(TextField)`
  width: 100%;
`;

export const FormItem = styled.div`
  margin: 8px 0;
  width: 100%;
`;
