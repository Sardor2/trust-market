import { Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../../components/button";
import Form from "../../components/form";
import Select from "../../components/select";
import useRegister from "../../services/mutations/use-register";
import { FormItem, StyledInput, StyledPaper } from "./auth.styles";

export const userTypes = [
  { name: "Investor", value: "investor" },
  { name: "Customer", value: "customer" },
  { name: "Seller", value: "seller" },
];

const Signup = () => {
  const { control, handleSubmit } = useForm();
  const { mutate, isLoading } = useRegister();
  const onSubmit = (data) => {
    mutate({
      phone_number: data.phoneNumber,
      first_name: data.firstName,
      last_name: data.lastName,
      password: data.password,
      user_type: data.userType,
    });
  };
  return (
    <StyledPaper>
      <Typography component="h3" variant="h3">
        Sign up
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off" autoSave="off">
        <FormItem>
          <Controller
            control={control}
            name="firstName"
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <StyledInput {...field} label="Firstname" type="text" required />
            )}
          />
        </FormItem>
        <FormItem>
          <Controller
            control={control}
            name="lastName"
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <StyledInput {...field} label="Lastname" type="text" required />
            )}
          />
        </FormItem>

        <FormItem>
          <Controller
            control={control}
            name="userType"
            render={({ field }) => (
              <Select
                {...field}
                label="User type"
                options={userTypes}
                inputProps={{
                  style: { width: "100%" },
                }}
              />
            )}
          />
        </FormItem>
        <FormItem>
          <Controller
            control={control}
            name="phoneNumber"
            rules={{ required: true, maxLength: 15 }}
            render={({ field, fieldState: { error } }) => (
              <StyledInput
                {...field}
                label="Phone number"
                type="text"
                required
              />
            )}
          />
        </FormItem>

        <FormItem>
          <Controller
            control={control}
            name="password"
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <StyledInput
                {...field}
                label="Password"
                type="password"
                required
                autoComplete="new-password"
              />
            )}
          />
        </FormItem>

        <CustomButton isLoading={isLoading} variant="contained" type="submit">
          Sign up
        </CustomButton>
      </Form>
    </StyledPaper>
  );
};

export default Signup;
