import { Container, Grid, Typography } from "@mui/material";
import Button from "../../../../components/Ui/Button";

const Journey = () => {
  return (
    <Container
      maxWidth="xl"
      style={{
        padding: "0px 7%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        style={{
          fontSize: "18px",
          textAlign: "center",
          letterSpacing: "1px",
          lineHeight: "30px",
          width: "60%",
        }}
      >
        Estes valores são a essência da nossa marca e guiam cada aspecto da
        nossa prática.
      </Typography>
      <Typography
        variant="h1"
        style={{
          fontSize: "30px",
          textAlign: "center",
          letterSpacing: "1px",
          lineHeight: "30px",
          textTransform: "uppercase",
          marginTop: "30px",
        }}
      >
        Elevamos os <b>padrões de qualidade</b> nos cuidados de saúde.
      </Typography>
      <Grid container columnSpacing={"60px"} mt="300px">
        <Grid item xs={4}>
          <div
            style={{
              height: "100%",
              display: "flex",
              rowGap: "20px",
              alignItems: "center",
              justifyContent: "end",
              flexDirection: "column",
              paddingBottom: "20px",
            }}
          >
            <Typography
              variant="h1"
              style={{
                fontSize: "30px",
                letterSpacing: "3px",
                fontWeight: 700,
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              A experiência
            </Typography>
            <Typography
              style={{
                fontSize: "13px",
                letterSpacing: "1px",
                lineHeight: "22px",
                textAlign: "center",
              }}
            >
              Entre num universo cuidadosamente criado para proporcionar uma
              experiência única.
            </Typography>
            <Typography
              style={{
                fontSize: "13px",
                marginTop: "10px",
                letterSpacing: "1px",
                lineHeight: "22px",
                textAlign: "center",
              }}
            >
              Equipas especializadas, abordagem científica e foco na experiência
              são os nossos compromissos.
            </Typography>
            <div>
              <Button style={{ marginTop: "20px" }}>
                <Typography>Entrar</Typography>
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          {" "}
          <img
            alt=""
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <img
            alt=""
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Journey;
