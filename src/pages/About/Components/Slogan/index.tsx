import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

const Slogan = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderLaptop = () => {
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
          style={{ display: "flex", flexDirection: "column", rowGap: "50px" }}
        >
          <Typography
            variant="h1"
            style={{
              fontSize: "45px",
              textTransform: "uppercase",
              textAlign: "center",
              fontWeight: 500,
              maxWidth: "550px",
              lineHeight: "61px",
            }}
          >
            A nossa promessa é o seu Bem-estar
          </Typography>
        </div>
        <Container
          maxWidth="xl"
          style={{ marginTop: "400px", position: "relative" }}
        >
          <div
            style={{
              width: "1px",
              height: "216px",
              position: "absolute",
              backgroundColor: "black",
              left: "50%",
              top: "-150px",
            }}
          />
          <img
            alt=""
            style={{ width: "100%", height: "580px", objectFit: "cover" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </Container>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <div>
        {" "}
        <img
          alt=""
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
          src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
            marginTop: "50px",
          }}
        >
          <Typography
            style={{
              fontSize: "16px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Slogan sobre a marca
          </Typography>
          <Typography style={{ textAlign: "center", fontSize: "13px" }}>
            Descrição descrição descrição
          </Typography>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default Slogan;
