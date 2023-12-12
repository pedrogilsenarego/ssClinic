import { Box, Typography } from "@mui/material";
import { i18n } from "../../translations/i18n";

const RefundPolicies = () => {
  return (
    <Box
      style={{ display: "flex", justifyContent: "center", margin: "0px 20px" }}
    >
      <Box style={{ marginTop: "100px", maxWidth: "500px" }}>
        <Typography
          style={{
            fontSize: "35px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: "49px",
          }}
        >
          {i18n.t("pages.refundPolicies.refundPolicies")}
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          BA111OD may revise these Terms & conditions of use from time to time.
          The Terms & Conditions in force at the time of purchase will apply to
          the contract between you and BA111OD. You should therefore
          occasionally visit this page to review the then current terms to which
          you are bound. If you have any further questions do not hesitate to
          contact us. We wish you an exciting experience with your new BA111OD
          product.
        </Typography>
      </Box>
    </Box>
  );
};

export default RefundPolicies;
