import { Box, Container, Grid, Typography } from "@mui/material";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import DrawerMine from "../../../components/Drawer";
import { Icons } from "../../../components/Icons";
import UncontrolledSelect from "../../../components/Inputs/UncontroledSelect";
import BasicPopover from "../../../components/Popover";
import Button from "../../../components/Ui/Button";
import { State } from "../../../redux/types";
import { ROUTE_PATHS } from "../../../routes/constants";
import { Colors } from "../../../theme/theme";
import { CurrentUser } from "../../../types/user";
import Cart from "./Cart";
import UserPopoverContent from "./UserPopoverContent";
import { langOptions, options } from "./constants";
import useStyles from "./styles";
import useHeader from "./useHeader";

const Header = () => {
  const classes = useStyles();
  const { totalCartItems, cartDrawer, setCartDrawer, lang, changeLanguage } =
    useHeader();
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
        <Grid container>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          ></Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              onClick={() => navigate(ROUTE_PATHS.HOME)}
              src={logo}
              alt="logo"
              style={{ width: "150px", cursor: "pointer" }}
            />
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Box>
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
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        style={{
          display: "flex",
          borderTop: `solid 1px ${Colors.blackish[40005]}`,
          columnGap: "20px",
          marginTop: "20px",
          padding: "10px 0px",
          justifyContent: "center",
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
        <div
          style={{
            marginRight: "-10px",
            width: "2px",
            height: "24px",
            backgroundColor: Colors.blackish[40005],
          }}
        />
        <Box>
          <UncontrolledSelect
            options={langOptions}
            initialValue={lang.toLowerCase()}
            onChange={(v) => changeLanguage(v)}
          />
        </Box>
        <div
          style={{
            marginLeft: "-10px",
            width: "2px",
            height: "24px",
            backgroundColor: Colors.blackish[40005],
          }}
        />
        <Box
          style={{ cursor: "pointer", position: "relative" }}
          onClick={() => {
            setCartDrawer(true);
          }}
        >
          {totalCartItems > 0 && (
            <Box
              style={{
                border: `solid 3px ${Colors.blackish[40005]}`,
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1px",
                width: "16px",
                height: "16px",
                right: "-17px",
                bottom: "2px",
              }}
            >
              <Typography fontSize="12px">{totalCartItems || 0}</Typography>
            </Box>
          )}

          <Icons.Cart size={"20px"} />
        </Box>
      </Box>

      <BasicPopover isOpen={isOpen} anchorEl={anchorEl} onClose={handleClose}>
        <UserPopoverContent handleClose={handleClose} />
      </BasicPopover>
      <DrawerMine
        minWidth="30vw"
        fullHeight
        position="right"
        openDrawer={cartDrawer}
        setOpenDrawer={setCartDrawer}
      >
        <Cart closeCart={setCartDrawer} />
      </DrawerMine>
    </Box>
  );
};

export default Header;
