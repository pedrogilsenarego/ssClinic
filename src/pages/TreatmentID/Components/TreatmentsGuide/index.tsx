import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "../../../../components/Ui/Button";

const TreatmentsGuide = () => {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "40px" }}>
      <Typography
        style={{ fontSize: mobile ? "15px" : "20px", fontWeight: "bold" }}
      >
        Guia de tratamentos
      </Typography>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: mobile ? "0px 10px" : "0px 40px",
            rowGap: "20px",
            borderRight: "solid 2px black",
            borderBottom: mobile ? "solid 2px black" : "none",
          }}
        >
          <Typography style={{ fontWeight: "bold" }}>Pre-tratamento</Typography>
          <Typography>Descrição Descrição</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: mobile ? "0px 10px" : "0px 40px",
            rowGap: "20px",
            borderRight: mobile ? "none" : "solid 2px black",
            borderBottom: mobile ? "solid 2px black" : "none",
          }}
        >
          <Typography style={{ fontWeight: "bold" }}>Pre-tratamento</Typography>
          <Typography>Descrição Descrição</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: mobile ? "0px 10px" : "0px 40px",
            rowGap: "20px",
            borderRight: "solid 2px black",
          }}
        >
          <Typography style={{ fontWeight: "bold" }}>Pre-tratamento</Typography>
          <Typography>Descrição Descrição</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: mobile ? "0px 10px" : "0px 40px",
            rowGap: "20px",
          }}
        >
          <Typography style={{ fontWeight: "bold" }}>Pre-tratamento</Typography>
          <Typography>Descrição Descrição</Typography>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          columnGap: "50px",
          marginTop: "100px",
        }}
      >
        <Button>
          <Typography>CTA</Typography>
        </Button>
        <Button>
          <Typography>CTA</Typography>
        </Button>
      </div>
    </div>
  );
};

export default TreatmentsGuide;
