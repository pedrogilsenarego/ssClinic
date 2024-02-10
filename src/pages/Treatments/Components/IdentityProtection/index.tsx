import { Typography } from "@mui/material";
import Button from "../../../../components/Ui/Button";

const IdentityProtection = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "1px", height: "200px", backgroundColor: "grey" }} />

      <Typography
        style={{
          marginTop: "50px",
          fontSize: "18px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Somos especialistas na
      </Typography>
      <Typography
        variant="h1"
        style={{
          marginTop: "30px",
          fontSize: "35px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Proteção de identidade
      </Typography>
      <div
        style={{
          display: "flex",
          marginTop: "100px",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <Typography
          style={{
            fontWeight: 500,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Confidencialidade
        </Typography>
        <Typography
          style={{
            fontWeight: 500,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Privaçidade
        </Typography>
        <Typography
          style={{
            fontWeight: 500,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Proteção de dados
        </Typography>
      </div>
      <Typography
        style={{
          marginTop: "100px",
          fontWeight: 500,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "grey",
        }}
      >
        Agenda a sua consulta
      </Typography>
      <Button style={{ marginTop: "30px" }}>
        <Typography>Contactar</Typography>
      </Button>
    </div>
  );
};

export default IdentityProtection;
