import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Facebook from "../../../assets/Facebook.svg";
import Instagram from "../../../assets/Insta.svg";
import LivroReclamações from "../../../assets/LivroReclamações.svg";
import mainLogo from "../../../assets/LogoFull.svg";
import Youtube from "../../../assets/Youtube.svg";
import Button from "../../../components/Ui/Button";
import { i18n } from "../../../translations/i18n";

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const handleInstagram = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "instagram://user?username=thesecretwatchproject";
      setTimeout(() => {
        window.location.href =
          "https://instagram.com/thesecretwatchproject?igshid=OGQ5ZDc2ODk2ZA==";
      }, 1000);
    } else {
      window.open(
        "https://instagram.com/thesecretwatchproject?igshid=OGQ5ZDc2ODk2ZA==",
        "_blank"
      );
    }
  };

  type ItemProps = {
    title: string;
    list: {
      title: string;
      link?: string;
    }[];
  };

  const renderLaptop = () => {
    return (
      <Box style={{ backgroundColor: "lightGrey" }}>
        <Container maxWidth="xl">
          <Grid
            container
            style={{
              marginTop: "60px",
              marginBottom: "50px",
              flex: "display",
              flexDirection: mobile ? "column" : "row",
            }}
            spacing={2}
          >
            <Grid item xs={2.4}>
              <img
                src={mainLogo}
                alt=""
                style={{
                  height: 40,
                }}
              />
            </Grid>
            <Grid item xs={2.4}>
              <Button>
                <Typography>Marcações</Typography>
              </Button>
            </Grid>
            <Grid item xs={2.4}>
              <div style={{ display: "flex", columnGap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                  }}
                >
                  {" "}
                  <img
                    src={Instagram}
                    alt=""
                    style={{
                      height: 23,
                    }}
                  />
                  <img
                    src={Facebook}
                    alt=""
                    style={{
                      height: 23,
                    }}
                  />
                  <img
                    src={Youtube}
                    alt=""
                    style={{
                      height: 16,
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Contacte-nos
                  </Typography>
                  <Typography
                    style={{ fontSize: "10px", textDecoration: "underline" }}
                  >
                    RUA CASTILHO, 77 - PISO 21070-050 LISBOA - PORTUGAL
                    INFO@EHTIQ.COM +351 215 909 009
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={2.4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Typography style={{ fontSize: "12px", fontWeight: "bold" }}>
                  As nossas políticas
                </Typography>
                <Typography
                  style={{ fontSize: "10px", textDecoration: "underline" }}
                >
                  POLITICA DE PRIVACIDADE POLÍTICA DE COOKIES POLÍTICA DE
                  E-COMMERCE
                </Typography>
              </div>
            </Grid>
            <Grid item xs={2.4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  height: "100%",
                  justifyContent: "space-around",
                }}
              >
                <img
                  src={LivroReclamações}
                  alt=""
                  style={{
                    height: 38,
                  }}
                />
                <Typography style={{ fontSize: "5px", fontWeight: 500 }}>
                  Registar reclamação
                </Typography>

                <Typography style={{ fontSize: "7px", fontWeight: 600 }}>
                  @Copyright 2024, develop by <u>Linea Agency</u>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  const renderMobile = () => {
    return (
      <Box style={{ backgroundColor: "lightGrey" }}>
        <Container maxWidth="xl">
          <Grid
            container
            style={{
              marginTop: "60px",
              marginBottom: "50px",
              flex: "display",
              flexDirection: mobile ? "column" : "row",
            }}
            spacing={4}
          >
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src={mainLogo}
                alt=""
                style={{
                  height: 40,
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button>
                <Typography>Marcações</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} style={{ margin: "0px 50px" }}>
              <div style={{ display: "flex", columnGap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Contacte-nos
                  </Typography>
                  <Typography
                    style={{ fontSize: "10px", textDecoration: "underline" }}
                  >
                    RUA CASTILHO, 77 - PISO 21070-050 LISBOA - PORTUGAL
                    INFO@EHTIQ.COM +351 215 909 009
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                  }}
                >
                  {" "}
                  <img
                    src={Instagram}
                    alt=""
                    style={{
                      height: 23,
                    }}
                  />
                  <img
                    src={Facebook}
                    alt=""
                    style={{
                      height: 23,
                    }}
                  />
                  <img
                    src={Youtube}
                    alt=""
                    style={{
                      height: 16,
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} style={{ margin: "0px 50px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Typography style={{ fontSize: "12px", fontWeight: "bold" }}>
                  As nossas políticas
                </Typography>
                <Typography
                  style={{ fontSize: "10px", textDecoration: "underline" }}
                >
                  POLITICA DE PRIVACIDADE POLÍTICA DE COOKIES POLÍTICA DE
                  E-COMMERCE
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "space-around",
                }}
              >
                <img
                  src={LivroReclamações}
                  alt=""
                  style={{
                    height: 38,
                  }}
                />
                <Typography style={{ fontSize: "7px" }}>
                  Registar reclamação
                </Typography>

                <Typography style={{ fontSize: "12px", marginTop: "20px" }}>
                  @Copyright 2024, develop by <u>Linea Agency</u>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default Footer;
