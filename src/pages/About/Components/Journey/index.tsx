import { Container, Grid, Typography } from "@mui/material";
import Button from "../../../../components/Ui/Button";

const Journey = () => {
  return (
    <Container maxWidth="xl" style={{ padding: "0px 7%" }}>
      <Typography style={{ fontSize: "40px" }}>A jornada</Typography>
      <Grid container columnSpacing={"60px"} mt="50px">
        <Grid item xs={4}>
          {" "}
          <img
            alt=""
            style={{ width: "100%", height: "580px", objectFit: "cover" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <img
            alt=""
            style={{ width: "100%", height: "580px", objectFit: "cover" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              height: "100%",
              display: "flex",
              rowGap: "20px",
              justifyContent: "end",
              flexDirection: "column",
              paddingBottom: "20px",
            }}
          >
            <Typography>
              Descricao Descriçao Descricao Descriçao Descricao Descriçao
              Descricao Descriçao
            </Typography>
            <div>
              <Button>
                <Typography>Descricao Descriçao</Typography>
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Journey;
