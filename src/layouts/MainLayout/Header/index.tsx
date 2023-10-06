import { Box, Typography } from "@mui/material";
import { options } from "./constants";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {options.map((option) => {
        return <Typography>{option.name}</Typography>;
      })}
    </Box>
  );
};

export default Header;
