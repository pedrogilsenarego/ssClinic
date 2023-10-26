import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { Colors, mainColors } from "../../../theme/theme";

export interface Props {
  initialValue?: string;
  onChange: (value: string) => void;
  label?: string;
  options: { value: string; label: string }[];
}

const UncontrolledSelect = ({ initialValue, onChange, options }: Props) => {
  const [value, setValue] = useState(initialValue || undefined);
  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };
  return (
    <Select
      variant="standard"
      sx={{
        height: 20,
        margin: 0,
        padding: 0,
        color: Colors.blackish[400],

        "& .MuiSvgIcon-root": {
          color: mainColors.secondary,
        },
      }}
      value={value} // You can set the current value here
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
