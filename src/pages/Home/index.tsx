import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

import Button from "../../components/Ui/Button";

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
      <Container style={{ marginTop: "64px" }} maxWidth="xl">
        <ContainerC />
        <div style={{ marginTop: "200px" }}>
          <Whats />
        </div>
      </Container>
      <Escort />

      <div
        style={{
          marginTop: "150px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          rowGap: "50px",
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            fontSize: mobile ? "15px" : "25px",
            fontWeight: "bold",
            textTransform: "uppercase",
            maxWidth: "70%",
            textAlign: "center",
          }}
        >
          Conheça o espaço onde cuidamos de si
        </Typography>
        <Button>
          <Typography
            style={{
              textTransform: "uppercase",
              fontSize: mobile ? "12px" : "15px",
            }}
          >
            Complexo Ehtiq
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default Home;
