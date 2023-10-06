import { ButtonProps, Button as MuiButton } from "@mui/material";
import React from "react";
import { buttonStyle } from "./styles";

interface Props extends ButtonProps {}

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <MuiButton ref={ref} {...props} sx={buttonStyle} />;
});

export default Button;
