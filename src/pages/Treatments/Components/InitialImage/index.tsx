import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../../../assets/EHTIQ BRANDS-12.svg";

const InitialImage = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container
      maxWidth="xl"
      style={{ marginTop: "100px" }}
      disableGutters={mobile ? true : false}
    >
      <div
        style={{
          height: "100%",
          display: "flex",

          flexDirection: "column",
          justifyContent: "center",
          alignItems: mobile ? "center" : "start",
          width: "100%",
          rowGap: "20px",
        }}
      >
        <Typography
          variant="h1"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: mobile ? "11px" : "60px",
            fontWeight: 500,
          }}
        >
          Acompanhamos a sua
        </Typography>
        <Typography
          variant="h1"
          style={{
            textTransform: "uppercase",
            fontSize: mobile ? "32px" : "60px",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          Experiência
        </Typography>
        <Typography
          style={{
            marginTop: "50px",
            fontSize: mobile ? "16px" : "18px",
            letterSpacing: "1px",
            lineHeight: "31px",
            width: "70%",
          }}
        >
          Valorizamos cada momento. O nosso compromisso é o seu conforto,
          garantindo que cada passo seja uma expressão de cuidado e excelência.
        </Typography>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <img
          src={Logo}
          alt=""
          style={{
            height: 110,
          }}
        />
      </div>
    </Container>
  );
};

export default InitialImage;
