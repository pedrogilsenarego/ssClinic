import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Button from "../../../../components/Ui/Button";
import Title from "../../../../components/Ui/Title";
import { mainColors } from "../../../../theme/theme";

const ContainerC = () => {
  type PropsTile = {
    image: string;
    clinic: string;
    subtitles: string[];
  };
  const Tile = ({ image, clinic, subtitles }: PropsTile) => {
    const [hover, setHover] = useState<boolean>(false);
    return (
      <div
        style={{
          position: "relative",
          cursor: "pointer",
          width: "100%",
          aspectRatio: 0.72,
        }}
      >
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            transition: "transform 0.5s",
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div
            style={{
              marginTop: "100px",

              width: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
              {clinic}
            </Typography>
            <div
              style={{
                height: "1px",
                width: "40%",
                backgroundColor: "black",
                marginTop: "10px",
              }}
            />
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
              }}
            >
              {subtitles.map((title, index) => {
                return (
                  <Typography
                    style={{
                      textAlign: "center",
                      textDecoration: "underline",
                      fontSize: "18px",
                      opacity: hover ? 1 : 0,
                      transition: "all ease-in-out 0.5s",
                    }}
                    key={index}
                  >
                    {title}
                  </Typography>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container style={{ marginTop: "64px" }} maxWidth="xl">
      <Title>TagLine TagLine TagLine TagLine TagLine TagLine</Title>
      <Grid container height="100%" width="100%" style={{ marginTop: "45px" }}>
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
            style={{ height: "500px", width: "80%", objectFit: "cover" }}
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
              DNA
            </Typography>
            <Typography
              style={{
                color: mainColors.primary[400],
              }}
            >
              Discover the story behind the building of a watch that was created
              to break wallsDiscover the story behind the building of a watch
              that was created to break wallsDiscover the story behind the
              building of a watch that was created to break walls
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <Title>The Blend</Title>
      </div>
      <Grid
        container
        spacing={mobile ? "10px" : "40px"}
        style={{ marginTop: "75px" }}
      >
        <Grid item xs={6} md={3}>
          <Tile
            subtitles={["Tratamentos", "Consultoria"]}
            clinic="Nome clinica 1"
            image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Tile
            subtitles={["Tratamentos", "Consultoria"]}
            clinic="Nome clinica 1"
            image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Tile
            subtitles={["Tratamentos", "Consultoria"]}
            clinic="Nome clinica 1"
            image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Tile
            subtitles={["Tratamentos", "Consultoria"]}
            clinic="Nome clinica 1"
            image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          marginTop: "67px",
        }}
      >
        <div
          style={{
            width: "2px",
            height: "111px",
            backgroundColor: "black",
          }}
        ></div>
        <Button style={{ marginTop: "34px" }}>
          <Typography>EXPERT ADVICE</Typography>
        </Button>
      </div>
    </Container>
  );
};

export default ContainerC;
