import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

export interface Props {
  name: string;
  setValue: (value: string) => void;
  label?: string;
  options: { value: string; label: string }[];
}

const UncontrolledSelect = ({ name, setValue, options }: Props) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    // Use the setValue function to update the value
    setValue(event.target.value);
  };

  return (
    <Select
      value={name} // You can set the current value here
      onChange={handleChange} // Handle changes to the value
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default UncontrolledSelect;
