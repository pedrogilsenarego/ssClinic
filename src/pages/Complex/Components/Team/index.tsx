import { Typography, useMediaQuery, useTheme } from "@mui/material";
import TeamRooster from "./Components/TeamRooster";

const Team = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",

        flexDirection: "column",
        rowGap: "70px",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#00000066",
          width: "100%",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <div
          style={{ height: "2px", width: "100%", backgroundColor: "black" }}
        />
        <Typography
          style={{
            fontSize: mobile ? "22px" : "37px",
            fontWeight: "bold",
            textTransform: "uppercase",
            width: "100%",
            textAlign: "center",
          }}
        >
          A equipa Ethiq
        </Typography>
        <div
          style={{ height: "2px", width: "100%", backgroundColor: "black" }}
        />
      </div>
      <Typography
        style={{
          fontSize: mobile ? "11px" : "15px",
          textTransform: "uppercase",
        }}
      >
        Descrição Descrição Descrição Descrição Descrição Descrição Descrição
        Descrição
      </Typography>
      <TeamRooster />
    </div>
  );
};

export default Team;
