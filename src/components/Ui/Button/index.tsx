import { ButtonProps, Button as MuiButton } from "@mui/material";
import React, { useState } from "react";
import { buttonStyle } from "./styles";

interface Props extends ButtonProps {}

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <MuiButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={ref}
      {...props}
      sx={buttonStyle({ hover })}
    />
  );
});

export default Button;
