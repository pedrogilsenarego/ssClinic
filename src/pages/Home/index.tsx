import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

import Button from "../../components/Ui/Button";

import { i18n } from "../../translations/i18n";
import ContainerC from "./Components/Container";
import Escort from "./Components/Escort";
import Whats from "./Components/Whats";

const Home = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <img
        src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
        alt=""
        style={{
          height: "85vh",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <Container style={{ marginTop: mobile ? "50px" : "86px" }} maxWidth="xl">
        <ContainerC />
        <div style={{ marginTop: "200px" }}>
          <Whats />
        </div>
      </Container>
      <div style={{ marginTop: "400px" }}>
        <Escort />
      </div>

      <div
        style={{
          marginTop: "350px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          rowGap: "50px",
          flexDirection: "column",
        }}
      >
        <div
          style={{ width: "10%", height: "1px", backgroundColor: "darkGrey" }}
        ></div>
        <Typography
          style={{
            fontSize: mobile ? "15px" : "25px",
            fontWeight: "bold",
            textTransform: "uppercase",
            maxWidth: "70%",
            textAlign: "center",
          }}
        >
          {i18n.t("pages.home.spaceWhere")}
        </Typography>
        <Button>
          <Typography
            style={{
              textTransform: "uppercase",
              fontSize: mobile ? "12px" : "22px",
            }}
          >
            {i18n.t("pages.home.ctaSpaceWhere")}
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default Home;
