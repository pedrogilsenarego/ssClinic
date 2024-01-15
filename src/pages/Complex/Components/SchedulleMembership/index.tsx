import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "../../../../components/Ui/Button";

const SchedulleMembership = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <div
          style={{
            padding: "50px 0px",
            borderRight: "solid 1px black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: mobile ? "40px" : "70px",
          }}
        >
          <Typography
            style={{ fontSize: mobile ? "17px" : "24px", fontWeight: "bold" }}
          >
            Marcações
          </Typography>
          <Typography
            style={{
              maxWidth: "50%",
              textAlign: "center",
              fontSize: mobile ? "8px" : "16px",
            }}
          >
            Descrição Descrição Descrição Descrição Descrição Descrição
          </Typography>
          <Button>
            <Typography
              style={{
                fontSize: mobile ? "12px" : "16px",
                textTransform: "uppercase",
              }}
            >
              Abrir agenda
            </Typography>
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          style={{
            padding: "50px 0px",
            borderLeft: "solid 1px black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: mobile ? "40px" : "70px",
          }}
        >
          <Typography
            style={{ fontSize: mobile ? "17px" : "24px", fontWeight: "bold" }}
          >
            MemberShip
          </Typography>
          <Typography
            style={{
              maxWidth: "50%",
              textAlign: "center",
              fontSize: mobile ? "8px" : "16px",
            }}
          >
            Descrição Descrição Descrição Descrição Descrição Descrição
          </Typography>
          <Button>
            <Typography
              style={{
                fontSize: mobile ? "12px" : "16px",
                textTransform: "uppercase",
              }}
            >
              Mais Informações
            </Typography>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default SchedulleMembership;
