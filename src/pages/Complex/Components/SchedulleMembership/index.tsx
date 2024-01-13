import { Grid, Typography } from "@mui/material";
import Button from "../../../../components/Ui/Button";

const SchedulleMembership = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <div
          style={{
            padding: "50px 0px",
            borderRight: "solid 1px black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "70px",
          }}
        >
          <Typography style={{ fontSize: "24px", fontWeight: "bold" }}>
            Marcações
          </Typography>
          <Typography style={{ maxWidth: "50%", textAlign: "center" }}>
            Descrição Descrição Descrição Descrição Descrição Descrição
          </Typography>
          <Button>
            <Typography>Abrir agenda</Typography>
          </Button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div
          style={{
            padding: "50px 0px",
            borderLeft: "solid 1px black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "70px",
          }}
        >
          <Typography style={{ fontSize: "24px", fontWeight: "bold" }}>
            MemberShip
          </Typography>
          <Typography style={{ maxWidth: "50%", textAlign: "center" }}>
            Descrição Descrição Descrição Descrição Descrição Descrição
          </Typography>
          <Button>
            <Typography>Mais Informações</Typography>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default SchedulleMembership;
