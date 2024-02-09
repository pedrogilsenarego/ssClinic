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
        marginTop: mobile ? "100px" : "0px",
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
          padding: mobile ? "10px 20px" : "30px",
          columnGap: mobile ? "5px" : "0px",
        }}
      >
        <div
          style={{
            height: mobile ? "1px" : "2px",
            width: mobile ? "30%" : "100%",
            backgroundColor: "grey",
          }}
        />
        <Typography
          variant="h1"
          style={{
            fontSize: mobile ? "23px" : "40px",
            fontWeight: 500,
            textTransform: "uppercase",
            width: "100%",
            textAlign: "center",
          }}
        >
          A equipa Ethiq
        </Typography>
        <div
          style={{
            height: mobile ? "1px" : "2px",
            width: mobile ? "30%" : "100%",
            backgroundColor: "grey",
          }}
        />
      </div>
      <Typography
        style={{
          fontSize: mobile ? "8px" : "13px",
          width: mobile ? "90%" : "50%",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "1px",
          lineHeight: mobile ? "15px" : "25px",
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
