import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "../../../hooks/useLogout";
import { State } from "../../../redux/types";
import { Colors } from "../../../theme/theme";
import { CurrentUser } from "../../../types/user";
import { options } from "./constants";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const { onSignOut } = useSignOut();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classes.root}
      style={{
        background: hover
          ? `linear-gradient(to bottom, ${Colors.black[40025]} 1%, ${Colors.black[40001]})`
          : `linear-gradient(to bottom, ${Colors.black[40010]}, ${Colors.black[40001]})`,
      }}
    >
      {options.map((option) => {
        return (
          <Typography
            className={classes.text}
            key={option.name}
            onClick={() => navigate(option.link)}
          >
            {option.name}
          </Typography>
        );
      })}
      {currentUser && (
        <Typography
          className={classes.text}
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
