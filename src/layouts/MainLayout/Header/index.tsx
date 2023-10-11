import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "../../../hooks/useLogout";
import { State } from "../../../redux/types";
import { CurrentUser } from "../../../types/user";
import { options } from "./constants";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { onSignOut } = useSignOut();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );

  return (
    <Box className={classes.root}>
      {options.map((option) => {
        return (
          <Typography key={option.name} onClick={() => navigate(option.link)}>
            {option.name}
          </Typography>
        );
      })}
      {currentUser && (
        <Typography
          onClick={() => {
            onSignOut();
          }}
        >
          Sign out
        </Typography>
      )}
    </Box>
  );
};

export default Header;
