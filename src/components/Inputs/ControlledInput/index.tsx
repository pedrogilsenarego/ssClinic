/* eslint-disable react/no-unused-prop-types */
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormControlProps,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Tooltip,
} from "@mui/material";
import { FC } from "react";
import { Control, UseFormSetValue, get, useController } from "react-hook-form";
import { AiOutlineInfoCircle } from "react-icons/ai";
import useControlledInput from "./useControlledInput";

export interface BaseReactHookFormProps {
  name: string;
  control?: Control<any, any>;
  setValue?: UseFormSetValue<any>;
  label?: string;
  tooltipLabel?: string;
  inputPlaceholder: string;
  type?: string;
  multiline?: number;
  password?: boolean;
}
export interface BaseProps extends FormControlProps, BaseReactHookFormProps {}

const FormControlComp = (props: BaseProps) => {
  const { children, name, control, label, tooltipLabel } = props;
  const {
    formState: { errors },
  } = useController({ name, control });
  const error = get(errors, name, "");

  return (
    <FormControl error={!!errors[name]} fullWidth>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        {tooltipLabel && (
          <Tooltip placement="left" color="primary.100" title={tooltipLabel}>
            <Box height="0.9rem" width="0.9rem">
              <AiOutlineInfoCircle />
            </Box>
          </Tooltip>
        )}
      </Box>
      {children}
      <FormHelperText color="error">{error.message}</FormHelperText>
    </FormControl>
  );
};

const ControlledFormInput: FC<BaseProps> = (props) => {
  const {
    name,
    control,
    label,
    multiline,
    inputPlaceholder,
    type,
    password,
    setValue,
    ...rest
  } = props;
  const {
    hasError,
    field,
    isSubmitting,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useControlledInput({
    name,
    control,
    setValue,
  });
  return (
    <FormControlComp
      name={name}
      control={control}
      label={label}
      {...rest}
      inputPlaceholder={inputPlaceholder}
    >
      <TextField
        multiline={true}
        style={{ marginBottom: hasError ? "0.2rem" : "0" }}
        {...field}
        id={name}
        disabled={isSubmitting}
        placeholder={inputPlaceholder}
        type={showPassword || !password ? "text" : "password"}
        InputProps={
          password
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : {}
        }
      />
    </FormControlComp>
  );
};

export default ControlledFormInput;
