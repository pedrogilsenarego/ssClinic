import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { options } from "./constants";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.root}>
      {options.map((option) => {
        return (
          <Typography onClick={() => navigate(option.link)}>
            {option.name}
          </Typography>
        );
      })}
    </Box>
  );
};

export default Header;
