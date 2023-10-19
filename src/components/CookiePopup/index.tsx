import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { i18n } from "../../translations/i18n";

import { useNavigate } from "react-router-dom";
import { setCookiePolicy } from "../../redux/general/actions";
import { State } from "../../redux/types";
import { ROUTE_PATHS } from "../../routes/constants";
import { Colors } from "../../theme/theme";
import Popup from "../Popup";
import Button from "../Ui/Button";

const CookiePolicy = () => {
  const [cookiePolicyClick, setCookiePolicyClick] = useState<boolean>(false);
  const cookiePolicySignal = useSelector<State, boolean>(
    (state) => state?.general?.cookiePolicy
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      style={{
        position: "fixed",
        bottom: "60px",
        borderRadius: "4px",
        zIndex: 2000,
        right: "60px",
        backgroundColor: Colors.white[400],
        boxShadow: `2px 2px 6px ${Colors.black[40025]}`,
        padding: "20px",
      }}
    >
      <Grid container rowGap={2}>
        <Grid item xs={12} sm={9}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography style={{ fontSize: mobile ? "0.6rem" : "1rem" }}>
              {i18n.t("cookiePolicy.mainText")}
              <b
                onClick={() => navigate(ROUTE_PATHS.PRIVACY_POLICY)}
                onMouseEnter={() => setCookiePolicyClick(true)}
                onMouseLeave={() => setCookiePolicyClick(false)}
                style={{
                  cursor: "pointer",
                }}
              >
                {i18n.t("cookiePolicy.cookiePolicy")}
              </b>
              {i18n.t("cookiePolicy.secondText")}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          justifyContent="center"
          alignItems="center"
          display="flex"
          width="100%"
        >
          <Button onClick={() => dispatch(setCookiePolicy(false))}>
            {i18n.t("cookiePolicy.acceptTerms")}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CookiePolicy;
