import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { title } from "process";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import miniLogo from "../../../assets/miniLogo.svg";
import { Icons } from "../../../components/Icons";
import { setCookiePolicy } from "../../../redux/general/actions";
import { Colors } from "../../../theme/theme";
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

  const Item = ({ title, list }: ItemProps) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",

          rowGap: "16px",
        }}
      >
        <Typography style={{ fontWeight: "bold" }}>{title}</Typography>
        <div>
          {list.map((item) => {
            return (
              <Typography
                style={{
                  textTransform: "uppercase",
                  textDecoration: "underline",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                {item.title}
              </Typography>
            );
          })}
        </div>
      </div>
    );
  };
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
        >
          <Grid item xs={3}>
            <Item
              title="Redes Sociais"
              list={[
                { title: "Siga-nos no Instagram" },
                { title: "Siga-nos no Facebook" },
              ]}
            />
          </Grid>
          <Grid item xs={3}>
            <Item
              title="Redes Sociais"
              list={[
                { title: "Marcações Online" },
                { title: "Email:" },
                { title: "Tel:" },
              ]}
            />
          </Grid>
          <Grid item xs={3}>
            <Item
              title="Redes Sociais"
              list={[
                { title: "Politica de Privaçidade" },
                { title: "Politica de Cookies" },
                { title: "Politica de E-commerce" },
              ]}
            />
          </Grid>
          <Grid item xs={3}>
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <Typography style={{ fontSize: "12px" }}>
                Copyright 2024, develop by <u>Linea Agency</u>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
