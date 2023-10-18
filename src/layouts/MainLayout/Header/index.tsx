import { Box, Container, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
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
      <Container maxWidth="xl" className={classes.subRoot}>
        <img src={logo} alt="logo" style={{ width: "200px" }} />
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
      </Container>
    </Box>
  );
};

export default Header;
