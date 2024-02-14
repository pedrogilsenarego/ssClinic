import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import Button from "../../../../components/Ui/Button";
import { mainColors } from "../../../../theme/theme";
import { i18n } from "../../../../translations/i18n";

const ContainerC = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{ padding: mobile ? undefined : "0px 35px" }}>
      {!mobile && (
        <Typography
          variant="h1"
          style={{
            textAlign: mobile ? "center" : undefined,
            fontSize: mobile ? "14px" : "55px",
            fontWeight: 500,
            fontFamily: "'orpheuspro', sans-serif;",
            letterSpacing: "4px",
          }}
        >
          IN THE PURSUIT OF LONGEVITY
        </Typography>
      )}
    </div>
  );
};

export default ContainerC;
