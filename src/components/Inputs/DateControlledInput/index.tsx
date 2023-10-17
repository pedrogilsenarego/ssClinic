import { FormControl, FormControlProps, FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import useDateControlledInput from "./useDateControlledInput";

interface BaseReactHookFormProps {
  name: string;
  control?: Control<any, any>;
  label?: string;
}

interface BaseProps extends FormControlProps, BaseReactHookFormProps {
  format?: string;
}

const DateInput: React.FC<BaseProps> = (props) => {
  const { name, control, label } = props;
  const { errors, error } = useDateControlledInput({ name, control });
  return (
    <FormControl error={!!errors[name]} fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <DatePicker {...field} label={label} />}
      />
      <FormHelperText color="error">{error.message}</FormHelperText>
    </FormControl>
  );
};

export default DateInput;
