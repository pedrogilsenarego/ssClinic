import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "../../components/Ui/Button";
import Title from "../../components/Ui/Title";
import { mainColors } from "../../theme/theme";
import SchedulleMembership from "../Complex/Components/SchedulleMembership";
import EhtiqCode from "./Components/EhtiqCode";
import ProtectingIdentity from "./Components/ProtectingIdentity";
import "./index.css";

const About = () => {
  const [mouseX, setMouseX] = useState<number>(0);
  const maintext = "Finally a service that is your...  ";

  useEffect(() => {
    function handleMouseMove(event: { clientX: number; clientY: any }) {
      const xPercentage = (event.clientX / window.innerWidth) * 100;
      setMouseX(xPercentage);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const container = document.querySelector(".container") as HTMLElement;
    const firstBox = document.querySelector(".first-box") as HTMLElement;
    if (container) {
      container.style.setProperty("--cut-width", mouseX + "%");
    }
    if (firstBox) {
      firstBox.style.setProperty("--cut-width", mouseX + "%");
    }
  }, [mouseX]);

  return (
    <>
      <Container style={{}} maxWidth="xl">
        <Grid
          container
          height="100%"
          width="100%"
          style={{ marginTop: "450px" }}
        >
          <Grid
            item
            xs={6}
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
              alt=""
              style={{ height: "500px", width: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              height: "100%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",

                height: "500px",
                rowGap: "20px",
                width: "70%",
              }}
            >
              <Typography
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                }}
              >
                Sobre o Ritz / Localização
              </Typography>
              <Typography
                style={{
                  color: mainColors.primary[400],
                }}
              >
                Discover the story behind the building of a watch that was
                created to break wallsDiscover the story behind the building of
                a watch that was created to break wallsDiscover the story behind
                the building of a watch that was created to break walls
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <EhtiqCode />
      <Container style={{}} maxWidth="xl">
        <div style={{ marginTop: "300px" }}>
          <ProtectingIdentity />
        </div>
        <div style={{ marginTop: "300px" }}>
          <SchedulleMembership />
        </div>
      </Container>
      {/* <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "90vh",
          alignItems: "top",
          position: "relative",
          marginBottom: "400px",
          boxShadow: "2px 2px 6px #00000066",
        }}
      >
        <Box className="first-box">
          <Typography
            className="mainTypo"
            fontWeight={800}
            color={mainColors.primary[400]}
          >
            {maintext}{" "}
            <b style={{ fontFamily: "Gochi Hand", fontSize: "140px" }}>
              Friend
            </b>
          </Typography>
        </Box>
        <Box
          className="container"
          style={{
            position: "absolute",
            background: `linear-gradient(to right, ${mainColors.primary[40025]}, ${mainColors.primary[40005]})`,
            height: "100%",
            display: "flex",
            justifyContent: "center",

            overflow: "hidden",
          }}
        >
          {" "}
          <Typography
            className="mainTypo"
            fontWeight={800}
            color={mainColors.secondary[40050]}
          >
            {maintext}{" "}
            <b style={{ fontFamily: "Gochi Hand", fontSize: "140px" }}>Best</b>
          </Typography>
        </Box>
      </Box> */}
    </>
  );
};

export default About;
