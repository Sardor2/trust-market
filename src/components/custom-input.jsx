import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import InputWrapper from "./input-wrapper";

const CustomInput = ({
  control,
  name,
  type = "text",
  label = "Label",
  required = true,
  multiline = false,
  ...other
}) => {
  return (
    <InputWrapper>
      <Controller
        control={control}
        name={name}
        rules={{ required }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={label}
            type={type}
            error={error?.type === "required"}
            required={required}
            autoComplete="new-password"
            sx={{ width: "100%" }}
            multiline={multiline}
            {...other}
          />
        )}
      />
    </InputWrapper>
  );
};

export default CustomInput;
