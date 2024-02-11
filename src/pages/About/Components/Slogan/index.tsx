import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

const Slogan = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        width: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "50px",
          margin: mobile ? "20px" : "0px",
        }}
      >
        <Typography
          variant="h1"
          style={{
            fontSize: mobile ? "24px" : "45px",
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 500,
            maxWidth: "550px",
            lineHeight: mobile ? "41px" : "61px",
          }}
        >
          A nossa promessa é o seu Bem-estar
        </Typography>
      </div>
      <Container
        maxWidth="xl"
        style={{
          marginTop: mobile ? "100px" : "400px",
          position: "relative",
          padding: mobile ? "30px" : "0px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: mobile ? "100px" : "216px",
            position: "absolute",
            backgroundColor: "black",
            left: "50%",
            top: mobile ? "-58px" : "-150px",
          }}
        />
        <img
          alt=""
          style={{
            width: "100%",
            height: mobile ? "194px" : "580px",
            objectFit: "cover",
          }}
          src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
        />
      </Container>
    </div>
  );
};

export default Slogan;
