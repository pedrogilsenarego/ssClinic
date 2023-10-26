import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCookiePolicy } from "../../redux/general/actions";
import { State } from "../../redux/types";
import { CSS, Colors, mainColors } from "../../theme/theme";
import { i18n } from "../../translations/i18n";

import Button from "../Ui/Button";

const CookiePolicy = () => {
  const cookiePolicySignal = useSelector<State, boolean>(
    (state) => state?.general?.cookiePolicy
  );
  const dispatch = useDispatch();

  return cookiePolicySignal ? (
    <Box
      style={{
        position: "fixed",
        bottom: "60px",
        maxWidth: "400px",
        borderRadius: CSS.borderRadiusS,
        zIndex: 2000,
        right: "60px",
        backgroundColor: Colors.white[400],
        boxShadow: `2px 2px 6px ${Colors.black[40025]}`,
      }}
    >
      <Box style={{ padding: "20px" }}>
        <Typography style={{ fontWeight: 700, fontSize: "20px" }}>
          {i18n.t("cookiePopup.title")}
        </Typography>
        <Typography style={{ marginTop: "10px" }}>
          {i18n.t("cookiePopup.description")}
        </Typography>
      </Box>
      <Box
        style={{
          backgroundColor: mainColors.secondary[40050],
          padding: "20px",
          borderRadius: `0px 0px ${CSS.borderRadiusS} ${CSS.borderRadiusS}`,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          onClick={() => {
            dispatch(setCookiePolicy(false));
          }}
        >
          {i18n.t("cookiePopup.accept")}
        </Button>
      </Box>
    </Box>
  ) : null;
};

export default CookiePolicy;
