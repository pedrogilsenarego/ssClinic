import { Box, Container, Typography } from "@mui/material";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { Icons } from "../../../components/Icons";
import BasicPopover from "../../../components/Popover";
import Button from "../../../components/Ui/Button";
import { State } from "../../../redux/types";
import { ROUTE_PATHS } from "../../../routes/constants";
import { Colors } from "../../../theme/theme";
import { CurrentUser } from "../../../types/user";
import UserPopoverContent from "./UserPopoverContent";
import { options } from "./constants";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClickPopover = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  const handleUser = (e: any) => {
    handleClickPopover(e);
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl" className={classes.subRoot}>
        <img
          onClick={() => navigate(ROUTE_PATHS.HOME)}
          src={logo}
          alt="logo"
          style={{ width: "170px", cursor: "pointer" }}
        />
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

        <Button
          style={{
            minWidth: "200px",
          }}
          onClick={() => {
            if (!currentUser) navigate(ROUTE_PATHS.LOGIN);
          }}
          onMouseEnter={(e: any) => {
            if (currentUser) handleUser(e);
          }}
        >
          {currentUser ? (
            <Typography
              className={classes.text}
              style={{ textTransform: "capitalize" }}
            >
              {currentUser?.username}
            </Typography>
          ) : (
            <Typography
              className={classes.text}
              onClick={() => navigate(ROUTE_PATHS.LOGIN)}
            >
              Login
            </Typography>
          )}
          {currentUser && (
            <Icons.DownArrow
              size="1.1rem"
              style={{
                marginTop: "1px",
                marginLeft: "5px",
                color: Colors.blackish[400],
              }}
            />
          )}
        </Button>
      </Container>
      <BasicPopover isOpen={isOpen} anchorEl={anchorEl} onClose={handleClose}>
        <UserPopoverContent handleClose={handleClose} />
      </BasicPopover>
    </Box>
  );
};

export default Header;
