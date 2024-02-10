import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../translations/i18n";

const SpaceWhere = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={{
        marginTop: mobile ? "100px" : "350px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        rowGap: mobile ? "30px" : "50px",
        flexDirection: "column",
      }}
    >
      <div
        style={{ width: "10%", height: "1px", backgroundColor: "darkGrey" }}
      ></div>
      <Typography
        style={{
          fontSize: mobile ? "12px" : "19px",
          letterSpacing: "1px",
          lineHeight: "22px",
          textTransform: "uppercase",
          maxWidth: mobile ? "60%" : "70%",
          textAlign: "center",
        }}
      >
        {i18n.t("pages.home.spaceWhere")}
      </Typography>
      <Button>
        <Typography
          style={{
            textTransform: "uppercase",
            fontSize: mobile ? "12px" : "22px",
          }}
        >
          {i18n.t("pages.home.ctaSpaceWhere")}
        </Typography>
      </Button>
    </div>
  );
};

export default SpaceWhere;
