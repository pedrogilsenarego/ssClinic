import { Box, Grid, Typography } from "@mui/material";
import Input from "./Components/Input";

const Content3 = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      rowGap='10%'
      alignItems='center'
      style={{
        padding: "0px 5% 0px 5%",
        height: "100%",
        position: "relative",
        borderRadius: "7%",
        backgroundImage:
          "linear-gradient(to right, rgb(221, 5, 221), rgb(16, 4, 102))",
      }}
    >
      <Grid container alignItems='center' style={{ paddingTop: "100px" }}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Box display='flex' flexDirection='column' rowGap='20px'>
            <Input helper='Full name' />
            <Input multiline helper='Message' />
            <Box
              style={{
                backgroundColor: "white",
                color: "#000000BE",
                padding: "10px",
                width: "fit-content",
                borderRadius: "6px",
                boxShadow: "2px 2px 2px #ffffffB3"
              }}
            >
              <Typography fontWeight={600}>Submit</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        style={{
          width: "100%",
          height: "20%",
          zIndex: 10,
          backgroundColor: "whitesmoke",
          borderRadius: "1em",
          marginBottom: "20%",
        }}
      ></Box>
      <Box
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          height: "30%",
          backgroundColor: "black",
          borderRadius: "0 0 25px 25px",
        }}
      ></Box>
    </Box>
  );
};

export default Content3;
