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
          backgroundColor: "lightGrey",
          width: "100%",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <div
          style={{ height: "2px", width: "100%", backgroundColor: "grey" }}
        />
        <Typography
          variant="h1"
          style={{
            fontSize: mobile ? "22px" : "40px",
            fontWeight: 500,
            textTransform: "uppercase",
            width: "100%",
            textAlign: "center",
          }}
        >
          A equipa Ethiq
        </Typography>
        <div
          style={{ height: "2px", width: "100%", backgroundColor: "grey" }}
        />
      </div>
      <Typography
        style={{
          fontSize: mobile ? "11px" : "13px",
          width: "50%",
          textAlign: "center",
          textTransform: "uppercase",
          lineHeight: "25px",
        }}
      >
        Cada rosto da nossa equipa é uma extensão do nosso compromisso em
        realçar a sua beleza única.
      </Typography>
      <TeamRooster />
    </div>
  );
};

export default Team;
