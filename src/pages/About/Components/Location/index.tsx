import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { mainColors } from "../../../../theme/theme";

const Location = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      height="100%"
      width="100%"
      style={{ marginTop: mobile ? "200px" : "450px" }}
    >
      <Grid
        item
        xs={12}
        md={6}
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
        xs={12}
        md={6}
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
            alignItems: mobile ? "center" : "start",
            justifyContent: "center",

            height: "500px",
            rowGap: "20px",
            width: "70%",
          }}
        >
          <Typography
            style={{
              fontSize: mobile ? "16px" : "32px",
              fontWeight: 700,
            }}
          >
            Sobre o Ritz / Localização
          </Typography>
          <Typography
            style={{
              textAlign: mobile ? "center" : undefined,
              fontSize: mobile ? "13px" : "16px",
              color: mainColors.primary[400],
            }}
          >
            Discover the story behind the building of a watch that was created
            to break wallsDiscover the story behind the building of a watch that
            was created to break wallsDiscover the story behind the building of
            a watch that was created to break walls
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Location;
