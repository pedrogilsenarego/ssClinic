import { Box, Container, Grid, Typography } from "@mui/material";

import Button from "../../components/Ui/Button";
import { mainColors } from "../../theme/theme";

const Home = () => {
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
                DNA
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
        <Grid
          container
          height="100%"
          width="100%"
          style={{ marginTop: "350px" }}
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
                  color: mainColors.secondary[400],
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
                Discover the story behind the building of a watch that was
                created to break wallsDiscover the story behind the building of
                a watch that was created to break wallsDiscover the story behind
                the building of a watch that was created to break walls
              </Typography>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button darkenColors>
                  <Typography>Learn More</Typography>
                </Button>
              </div>
            </Box>
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
            <img
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
              alt=""
              style={{ height: "500px", width: "100%", objectFit: "cover" }}
            />
          </Grid>
        </Grid>
        <div
          style={{
            marginTop: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: "40px",
          }}
        >
          <Typography style={{ fontSize: "20px", fontWeight: "800" }}>
            Titulo
          </Typography>
          <Typography>Titulo</Typography>
          <Grid container columnSpacing={"120px"}>
            <Grid item xs={3}>
              {" "}
              <img
                src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                alt=""
                style={{ width: "100%", objectFit: "cover", aspectRatio: 1.6 }}
              />
            </Grid>
            <Grid item xs={3}>
              {" "}
              <img
                src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                alt=""
                style={{ width: "100%", objectFit: "cover", aspectRatio: 1.6 }}
              />
            </Grid>
            <Grid item xs={3}>
              {" "}
              <img
                src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                alt=""
                style={{ width: "100%", objectFit: "cover", aspectRatio: 1.6 }}
              />
            </Grid>
            <Grid item xs={3}>
              {" "}
              <img
                src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                alt=""
                style={{ width: "100%", objectFit: "cover", aspectRatio: 1.6 }}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Home;
