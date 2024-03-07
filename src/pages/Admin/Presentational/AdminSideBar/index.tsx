import { Box, Typography } from "@mui/material";
import Status from "../../../../assets/status-up.svg";
import { Icons } from "../../../../components/Icons";
import { ROUTE_PATHS } from "../../../../routes/constants";
import Close from "../../../../assets/Frame 407.svg";
import { i18n } from "../../../../translations/i18n";
import Button from "./Button";
import User from "./User";

const AdminSideBar = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={2}
      style={{
        height: "100vh",
        backgroundColor: "rgba(15, 9, 12, 0.7)",
        borderRadius: "0px 20px 20px 0px",
        padding: "40px 30px 0px 30px",
      }}
    >
      <Box
        style={{ display: "flex", justifyContent: "end", cursor: "pointer" }}
      >
        <img src={Close} style={{ height: "50px" }} />
      </Box>
      <User />
      <Typography
        style={{
          marginTop: "30px",
          textTransform: "capitalize",
          fontSize: "11px",
          letterSpacing: "0.5px",
          color: "rgba(255, 255, 255, 0.32)",
        }}
      >
        Menu
      </Typography>
      <Button
        label={"Performance"}
        icon={<img src={Status} style={{ height: "24px" }} />}
        path={ROUTE_PATHS.ADMIN_MANAGE_ANALYTICS}
      />

      <Button
        label={i18n.t("pages.admin.sidebar.users", "Users")}
        icon={<Icons.User />}
        path={ROUTE_PATHS.ADMIN_MANAGE_USERS}
      />

      <Button
        label={i18n.t("pages.admin.sidebar.blog", "Blog")}
        icon={<Icons.Time />}
        path={ROUTE_PATHS.ADMIN_MANAGE_BLOG}
      />

      <Button
        label={i18n.t("pages.admin.sidebar.products", "Products")}
        icon={<Icons.Edit />}
        path={ROUTE_PATHS.ADMIN}
      />

      <Button
        label={i18n.t("pages.admin.sidebar.backHome", "Back Home")}
        icon={<Icons.Home />}
        path={ROUTE_PATHS.HOME}
      />
    </Box>
  );
};

export default AdminSideBar;
