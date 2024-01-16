import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Whats = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Typography style={{ fontSize: mobile ? "17px" : "35px" }}>
        What's on
      </Typography>
      <Grid
        container
        columnSpacing={"40px"}
        rowSpacing="30px"
        style={{ marginTop: "30px" }}
      >
        <Grid item xs={12} md={4}>
          <div>
            <img
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
              alt=""
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
            <div>
              <Typography>Titulo</Typography>
              <Typography>Descrição de imagem</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div>
            <img
              alt=""
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
            <div>
              <Typography>Titulo</Typography>
              <Typography>Descrição de imagem</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div>
            <img
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
              alt=""
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
            <div>
              <Typography>Titulo</Typography>
              <Typography>Descrição de imagem</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Whats;
