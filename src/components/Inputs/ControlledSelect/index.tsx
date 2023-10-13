import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import useControlledSelect from "./useControlledSelect";

export interface BaseReactHookFormProps {
  name: string;
  defaultLabel?: string;
  control?: Control<any, any>;
  setValue?: UseFormSetValue<any>;
  label?: string;
  options: { value: string; label: string }[];
}

export interface BaseProps extends FormControlProps, BaseReactHookFormProps {}

const ControlledSelect = ({
  label,
  defaultLabel,
  name,
  control,
  options,
}: BaseProps) => {
  const { errors, error } = useControlledSelect({ name, control });
  return (
    <FormControl error={!!errors[name]} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={
          options.find((option) => option.label === defaultLabel)?.value || ""
        }
        render={({ field }) => (
          <Select {...field}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <FormHelperText color="error">{error.message}</FormHelperText>
    </FormControl>
  );
};

export default ControlledSelect;
