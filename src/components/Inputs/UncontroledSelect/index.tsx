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
      variant="outlined"
      sx={{
        height: 20,

        color: Colors.blackish[400],

        "& .MuiSvgIcon-root": {
          color: mainColors.primary[400],
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        "& .MuiSelect-outlined": {},
      }}
      value={value}
      onChange={handleChange}
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
