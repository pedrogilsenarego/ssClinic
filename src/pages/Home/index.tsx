import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import Button from "../../components/Ui/Button";
import { CSS, Colors, mainColors } from "../../theme/theme";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoUrl = "http://media.w3.org/2010/05/sintel/trailer.mp4";
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) return;
    video.src = videoUrl;
  }, [videoUrl]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <>
      <Box
        style={{
          backgroundImage: `url("https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png")`,
          width: "100%",
          height: "90vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          style={{
            backgroundColor: "white",
            padding: "25px 25px",
            position: "absolute",
            bottom: "22%",
            left: "50px",
          }}
        >
          <Typography
            style={{
              color: mainColors.secondary[400],
              letterSpacing: "1px",
              fontSize: "32px",
            }}
          >
            Omega Seamaster
          </Typography>
          <Typography style={{ color: mainColors.primary[400] }}>
            A watch to find the deeps of the ocean
          </Typography>
          <Button fullWidth darkenColors style={{ marginTop: "20px" }}>
            <Typography>Discover More</Typography>
          </Button>
        </Box>
      </Box>
      <Container style={{ height: "700px" }} maxWidth="xl">
        <Grid container height="100%">
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
              src="https://www.furlanmarri.com/cdn/shop/files/IMG_8234_72_1080x_23adb08f-f24a-4ed6-83f7-78e246c4b6e5_1080x.webp?v=1690448452"
              alt=""
              style={{ height: "80%" }}
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
              <Button darkenColors fullWidth>
                <Typography>Learn More</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        height="600px"
        width="100%"
        position="relative"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          ref={videoRef}
          playsInline
          autoPlay
          preload="auto"
          loop
          muted
          src="https://youtu.be/rfTJ_X2DR6Q"
          width="100%"
          height="100%"
          style={{ backgroundColor: "red", objectFit: "cover" }}
        />
        <Box
          position="absolute"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          <Typography fontSize="30px" color={mainColors.secondary[400]}>
            The Journey
          </Typography>
          <Button lightenColor>
            <Typography color={Colors.white[400]}>Discover More</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
