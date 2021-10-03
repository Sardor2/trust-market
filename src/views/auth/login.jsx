import { Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../components/button";
import Form from "../../components/form";
import useLogin from "../../services/mutations/use-login";
import { FormItem, StyledInput, StyledPaper } from "./auth.styles";

const Login = () => {
  const { control, handleSubmit } = useForm();
  const { mutate, isLoading } = useLogin();
  const onSubmit = (data) => {
    mutate({
      phone_number: data.phoneNumber,
      password: data.password,
    });
  };
  return (
    <StyledPaper>
      <Typography component="h3" variant="h3">
        Login
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off" autoSave="off">
        <FormItem>
          <Controller
            control={control}
            name="phoneNumber"
            rules={{ required: true }}
            render={({ field }) => (
              <StyledInput {...field} label="Phone number" type="tel" />
            )}
          />
        </FormItem>
        <FormItem>
          <Controller
            control={control}
            name="password"
            rules={{ required: true }}
            render={({ field }) => (
              <StyledInput {...field} label="Password" type="password" />
            )}
          />
        </FormItem>

        <CustomButton isLoading={isLoading} type="submit" variant="contained">
          Login
        </CustomButton>
      </Form>
    </StyledPaper>
  );
};

export default Login;
