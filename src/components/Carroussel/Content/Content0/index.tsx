import { Box, Typography, Grid } from "@mui/material";
import "./styles.css"

const Content0 = () => {
  return (
    <Box style={{ margin: "0px 10% 0px 10%" }}>
      <Grid container xs={6} style={{ marginTop: "10%" }}>
        <Grid item>
          <Box
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(221, 5, 221), rgb(16, 4, 102))",
              fontSize: "0.5em",
              fontWeight: 700,
              padding: "0.7em",
              border: "solid 1px #ffffffCC",
              borderRadius: "3px",
              width: "fit",
            }}
          >
            Something DOnt know what
          </Box>
          <Typography
            className="buzzing-element-0"
            mt='1em'
            fontSize='1.1em'
            style={{
              fontWeight: 800,
              fontFamily: "neontubes",
              lineHeight: "1.2em",
            }}
          >
            Hi!! I'm Pedro, a Web Dev
          </Typography>
          <Typography mt='1em' fontSize='0.5em'>
            Started my career as a biological engineer researcher, and during my
            life have been learning Robotics, Electronics, 3D-Design, and many
            other skills, however, eventually, felt in love with Web
            Development.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content0;
