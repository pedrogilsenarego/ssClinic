import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

const InitialImage = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={{
        width: "100%",
        height: "620px",
        position: "relative",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage:
          "url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)",
      }}
    >
      <Container maxWidth="xl" disableGutters={mobile ? true : false}>
        <div
          style={{
            position: "absolute",
            height: "100%",
            display: "flex",

            flexDirection: "column",
            justifyContent: "center",
            alignItems: mobile ? "center" : "start",
            width: "100%",
            columnGap: "20px",
          }}
        >
          <Typography
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: mobile ? "11px" : "18px",
            }}
          >
            Tratamentos de
          </Typography>
          <Typography
            style={{
              textTransform: "uppercase",
              fontSize: mobile ? "32px" : "45px",
              fontStyle: "italic",
            }}
          >
            Assinatura
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default InitialImage;
