import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { mainColors } from "../../theme/theme";

const BuySuccess = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      style={{
        alignItems: "center",
        textAlign: "center",
        minHeight: mobile ? "50vh" : "100vh",
        width: "100vw",
        paddingTop: mobile ? "100px" : "140px",
        paddingBottom: "100px",

        flexDirection: "column",
      }}
    >
      <Typography
        color={mainColors.primary[400]}
        fontSize={mobile ? "2rem" : "3rem"}
        fontWeight={800}
        mt="80px"
      >
        Hello!!
      </Typography>
      <Typography
        color={mainColors.primary[400]}
        fontSize={mobile ? "1rem" : "2rem"}
        fontWeight={800}
        mt={mobile ? "20px" : "80px"}
      >
        Thanks for buying
      </Typography>
    </Box>
  );
};

export default BuySuccess;
