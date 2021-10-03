import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import MuiSelect from "@mui/material/Select";
import styled from "@emotion/styled";
import InputWrapper from "./input-wrapper";

const StyledLabel = styled(InputLabel)``;

const StyledSelect = styled(MuiSelect)``;

const StyledErrorText = styled(FormHelperText)``;

const paperStyles = {};

const Select = ({
  id = "select-demo-label",
  label,
  value,
  onChange = () => null,
  onBlur = () => null,
  name = "some name",
  error = "",
  defaultValue = null,
  children,
  options = [],
  ...otherProps
}) => {
  return (
    <InputWrapper>
      <FormControl style={{ width: "100%" }} error={error}>
        <StyledLabel id="demo-simple-select-label">{label}</StyledLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label={label}
          onChange={onChange}
          onBlur={onBlur}
          MenuProps={{
            PaperProps: {
              style: paperStyles,
            },
          }}
          variant="outlined"
          {...otherProps}
        >
          {defaultValue ? (
            <MenuItem value="">
              <em>{defaultValue}</em>
            </MenuItem>
          ) : null}

          {options.map((item) => (
            <MenuItem value={item.value}>{item.name}</MenuItem>
          ))}
        </StyledSelect>
        <StyledErrorText>{error}</StyledErrorText>
      </FormControl>
    </InputWrapper>
  );
};

export default Select;
