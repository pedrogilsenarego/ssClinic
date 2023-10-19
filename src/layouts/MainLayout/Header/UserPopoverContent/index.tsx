import { Box, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSignOut } from "../../../../hooks/useLogout";
import { State } from "../../../../redux/types";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { Colors } from "../../../../theme/theme";
import { i18n } from "../../../../translations/i18n";
import { CurrentUser } from "../../../../types/user";

const UserPopoverContent = ({ handleClose }: any) => {
  const navigate = useNavigate();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const { onSignOut } = useSignOut();

  return (
    <div
      onMouseLeave={handleClose}
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        rowGap: "6px",
        minWidth: "200px",
        justifyContent: "center",
        alignItems: "end",
      }}
    >
      <Typography
        style={{
          textAlign: "right",
          cursor: "pointer",
          fontWeight: 800,
        }}
      >
        {currentUser?.email}
      </Typography>
      <Divider style={{ width: "100%" }} />
      <Box>
        <Typography
          onClick={() => navigate(ROUTE_PATHS.HOME)}
          style={{
            cursor: "pointer",
            color: Colors.blackish[400],
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          {i18n.t("menuBar.userPopover.user")}
        </Typography>
        <Box style={{ marginLeft: "14px" }}>
          <Typography
            onClick={() => navigate(ROUTE_PATHS.HOME)}
            style={{
              cursor: "pointer",
              color: Colors.blackish[400],
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {i18n.t("modules.clientManagement.generalSettings")}
          </Typography>
          <Typography
            style={{
              cursor: "pointer",
              color: Colors.blackish[400],
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {i18n.t("modules.clientManagement.invoiceSettings")}
          </Typography>
          <Typography
            style={{
              cursor: "pointer",
              color: Colors.blackish[400],
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {i18n.t("modules.clientManagement.couponsSettings")}
          </Typography>
        </Box>
      </Box>
      <Divider style={{ width: "100%" }} />
      <Typography
        onClick={onSignOut}
        style={{
          cursor: "pointer",
          color: Colors.blackish[400],
        }}
      >
        {i18n.t("header.logout", "Sign Out")}
      </Typography>
      {currentUser?.role?.includes("ADMIN") && (
        <>
          <Divider style={{ width: "100%" }} />
          <Typography
            style={{
              cursor: "pointer",
              color: Colors.blackish[400],
            }}
            onClick={() => navigate(ROUTE_PATHS.ADMIN)}
          >
            Admin
          </Typography>
        </>
      )}
    </div>
  );
};

export default UserPopoverContent;
