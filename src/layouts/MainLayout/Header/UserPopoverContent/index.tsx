import { Box, Typography } from "@mui/material";
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
        padding: "20px 30px",
        display: "flex",
        flexDirection: "column",
        rowGap: "12px",
        minWidth: "200px",
        justifyContent: "end",
        alignItems: "end",
      }}
    >
      <Typography
        style={{
          cursor: "pointer",

          textDecoration: "underline",
          color: Colors.redish[40050],
        }}
      >
        {currentUser?.email}
      </Typography>

      <Box style={{}}>
        <Typography
          onClick={() => navigate(ROUTE_PATHS.MY_ACCOUNT)}
          style={{
            cursor: "pointer",

            color: Colors.blackish[400],
          }}
        >
          {i18n.t("header.account")}
        </Typography>
      </Box>

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
          <Typography
            style={{
              cursor: "pointer",
              fontWeight: 800,
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
