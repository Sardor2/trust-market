import { css } from "@emotion/react";
import { lightTheme } from "./theme.config";

export const globalStyles = css`
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }
  body {
    background-color: ${lightTheme.bg.main};
  }
`;
