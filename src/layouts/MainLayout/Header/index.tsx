import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import logo from "../../../assets/logo.svg";
import DrawerMine from "../../../components/Drawer";
import { Icons } from "../../../components/Icons";
import UncontrolledSelect from "../../../components/Inputs/UncontroledSelect";
import BasicPopover from "../../../components/Popover";
import Button from "../../../components/Ui/Button";
import { useSignOut } from "../../../hooks/useLogout";
import { State } from "../../../redux/types";
import { ROUTE_PATHS } from "../../../routes/constants";
import { Colors, mainColors } from "../../../theme/theme";
import { i18n } from "../../../translations/i18n";
import { CurrentUser } from "../../../types/user";
import Cart from "./Cart";
import UserPopoverContent from "./UserPopoverContent";
import { langOptions, options } from "./constants";
import "./index.css";
import useStyles from "./styles";
import useHeader from "./useHeader";

const Header = () => {
  const classes = useStyles();
  const {
    totalCartItems,
    cartDrawer,
    setCartDrawer,
    lang,
    changeLanguage,
    location,
  } = useHeader();
  const navigate = useNavigate();

  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );

  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const [mobileDrawer, setMobileDrawer] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { onSignOut } = useSignOut();

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

  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setScrollingUp(false);
      } else {
        // Scrolling up
        if (currentScrollY <= 240) {
          setScrollingUp(true);
        }
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const renderLaptop = () => {
    return (
      <Box
        style={{
          backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
          padding: "15px 0px 15px 0px",
          backgroundSize: "cover",
          backgroundColor: "lightgray",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          transform: `translateY(${scrollingUp ? 0 : "-80%"})`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <Container
          maxWidth="xl"
          disableGutters
          style={{
            marginTop: "5vh",
            display: "flex",
            flexDirection: "column",
            transform: `translateY(${scrollingUp ? 0 : "83%"})`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <Grid container>
            <Grid item xs={4}></Grid>
            <Grid
              item
              xs={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                onClick={() => navigate(ROUTE_PATHS.HOME)}
                src={""}
                alt="logo"
                style={{
                  width: "120px",
                  cursor: "pointer",
                  border: "solid 2px black",
                }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                columnGap: "30px",
              }}
            >
              <Icons.User />
              <Icons.Menu />
              <Box>
                <UncontrolledSelect
                  options={langOptions}
                  initialValue={lang.toLowerCase()}
                  onChange={(v) => changeLanguage(v)}
                />
              </Box>
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
                    <Typography fontSize="12px">
                      {totalCartItems || 0}
                    </Typography>
                  </Box>
                )}

                <Icons.Cart size={"20px"} />
              </Box>
              <Button
                style={{
                  marginTop: "-3px",
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
            </Grid>
          </Grid>

          <Box
            style={{
              display: "flex",
              marginTop: "60px",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {options.map((option, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "30px",
                    margin: "0px 15px",
                    color: "grey",
                  }}
                >
                  <Typography
                    className={"text"}
                    style={{
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color:
                        location.pathname === option.link
                          ? mainColors.secondary[400]
                          : "inherit",
                    }}
                    key={option.name}
                    onClick={() => navigate(option.link)}
                  >
                    {option.name}
                  </Typography>
                  {index < options.length - 1 && (
                    <div
                      style={{
                        width: "2px",
                        height: "20px",
                        backgroundColor: "grey",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </Box>
        </Container>

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

  const renderMobile = () => {
    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          style={{
            zIndex: 1000,
            position: "absolute",
            top: "20px",
            width: "100%",
            paddingRight: "30px",
          }}
        >
          <VscMenu
            size="35px"
            color={mainColors.primary[400]}
            onClick={() => setMobileDrawer(true)}
          />
        </Box>
        <DrawerMine
          fullWidth
          fullHeight
          position="left"
          openDrawer={mobileDrawer}
          setOpenDrawer={setMobileDrawer}
        >
          <Box
            mt="20px"
            padding="20px"
            display="flex"
            flexDirection="column"
            rowGap={4}
            justifyContent="center"
            alignItems="center"
          >
            <Divider style={{ width: "80%" }} />
            {location.pathname !== ROUTE_PATHS.HOME && (
              <Typography
                style={{ textTransform: "uppercase" }}
                fontWeight={800}
                onClick={() => {
                  navigate(ROUTE_PATHS.HOME);
                  setMobileDrawer(false);
                }}
              >
                {i18n.t("header.home")}
              </Typography>
            )}
            <Typography
              style={{ textTransform: "uppercase" }}
              fontWeight={800}
              onClick={() => {
                navigate(ROUTE_PATHS.ABOUT);
                setMobileDrawer(false);
              }}
            >
              {i18n.t("header.dna")}
            </Typography>
            <Typography
              style={{ textTransform: "uppercase" }}
              fontWeight={800}
              onClick={() => {
                navigate(ROUTE_PATHS.PRODUCTS);
                setMobileDrawer(false);
              }}
            >
              {i18n.t("header.collections")}
            </Typography>
            {currentUser ? (
              <>
                <Typography
                  style={{ textTransform: "uppercase" }}
                  fontWeight={800}
                  onClick={() => {
                    navigate(ROUTE_PATHS.MY_ACCOUNT);
                    setMobileDrawer(false);
                  }}
                >
                  {i18n.t("header.account")}
                </Typography>{" "}
                <Typography
                  style={{ textTransform: "uppercase" }}
                  fontWeight={800}
                  onClick={() => {
                    onSignOut();
                    setMobileDrawer(false);
                  }}
                >
                  {i18n.t("header.logout")}
                </Typography>
              </>
            ) : (
              <Typography
                style={{ textTransform: "uppercase" }}
                fontWeight={800}
                onClick={() => {
                  navigate(ROUTE_PATHS.LOGIN);
                  setMobileDrawer(false);
                }}
              >
                {i18n.t("header.login")}
              </Typography>
            )}

            <Divider style={{ width: "80%" }} />
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              {totalCartItems > 0 && (
                <Box
                  style={{
                    position: "absolute",
                    right: -7,
                    bottom: -7,
                  }}
                >
                  <Typography
                    fontWeight={800}
                    fontSize="12px"
                    color={mainColors.primary[400]}
                  >
                    {totalCartItems}
                  </Typography>
                </Box>
              )}
              <Icons.Cart
                onClick={(e) => {
                  e.preventDefault();
                  setMobileDrawer(false);
                  setCartDrawer(true);
                }}
                className="icon"
                size={"23px"}
                color={mainColors.primary[400]}
                style={{ marginTop: "-3px", cursor: "pointer" }}
              />
            </div>
            <Divider style={{ width: "80%" }} />
            <BsInstagram
              className="icon"
              size="1.4rem"
              color={mainColors.primary[400]}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </DrawerMine>
        <DrawerMine
          fullHeight
          fullWidth
          position="left"
          openDrawer={cartDrawer}
          setOpenDrawer={setCartDrawer}
        >
          <Cart closeCart={setCartDrawer} />
        </DrawerMine>
      </>
    );
  };

  return <>{mobile ? renderMobile() : renderLaptop()}</>;
};

export default Header;
