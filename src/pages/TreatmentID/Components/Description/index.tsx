import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Description = () => {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container>
      {!mobile && (
        <Grid item xs={12} md={7}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <div>
              <Typography style={{ fontSize: mobile ? "12px" : "20px" }}>
                Descrição
              </Typography>
              <Typography style={{ fontSize: mobile ? "11px" : "16px" }}>
                Descrição Descrição Descrição Descrição Descrição Descrição
                Descrição Descrição Descrição Descrição Descrição Descrição
              </Typography>
            </div>
          </div>
        </Grid>
      )}

      <Grid item xs={12} md={5}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            alt=""
            style={{ height: "260px" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </div>
      </Grid>
      {mobile && (
        <Grid item xs={12} md={7}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <div>
              <Typography style={{ fontSize: mobile ? "12px" : "20px" }}>
                Descrição
              </Typography>
              <Typography style={{ fontSize: mobile ? "11px" : "16px" }}>
                Descrição Descrição Descrição Descrição Descrição Descrição
                Descrição Descrição Descrição Descrição Descrição Descrição
              </Typography>
            </div>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default Description;
