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
            style={{ fontSize: "42px", textAlign: "center", maxWidth: "450px" }}
          >
            Slogan sobre a marca
          </Typography>
          <Typography style={{ textAlign: "center" }}>
            Descrição descrição descrição
          </Typography>
        </div>
        <Container maxWidth="xl" style={{ marginTop: "400px" }}>
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
