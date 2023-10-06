import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Ui/Button";
import { ROUTE_PATHS } from "../../routes/constants";
import { i18n } from "../../translations/i18n";
import useStyles from "./styles";

const NotFound: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.subRoot}>
        <Typography>
          {i18n.t("errors.notFound404", "404: Page not found")}
        </Typography>
        <Button onClick={() => navigate(ROUTE_PATHS.HOME)}>
          {i18n.t("errors.homeButton", "Back Home")}
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
