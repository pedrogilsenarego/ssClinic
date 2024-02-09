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
            rowGap: mobile ? "40px" : "60px",
          }}
        >
          <Typography
            style={{
              fontSize: mobile ? "17px" : "18px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Marcações
          </Typography>
          <Typography
            style={{
              maxWidth: "50%",
              textAlign: "center",
              fontSize: mobile ? "8px" : "13px",
              letterSpacing: "1px",
              lineHeight: "23px",
            }}
          >
            Agende online ou faça a sua marcação com os nossos assistentes.
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
            rowGap: mobile ? "40px" : "60px",
          }}
        >
          <Typography
            style={{
              fontSize: mobile ? "17px" : "18px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            MemberShip
          </Typography>
          <Typography
            style={{
              maxWidth: "50%",
              textAlign: "center",
              fontSize: mobile ? "8px" : "13px",
              letterSpacing: "1px",
              lineHeight: "23px",
            }}
          >
            Explore benefícios exclusivos com o nosso Acesso Membership.
          </Typography>
          <Button>
            <Typography
              style={{
                fontSize: mobile ? "12px" : "16px",
                textTransform: "uppercase",
              }}
            >
              + Informação
            </Typography>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default SchedulleMembership;
