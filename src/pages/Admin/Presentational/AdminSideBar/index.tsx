import { Box, Divider } from "@mui/material";

import { Icons } from "../../../../components/Icons";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { Colors } from "../../../../theme/theme";
import { i18n } from "../../../../translations/i18n";
import Button from "./Button";

const AdminSideBar = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={2}
      style={{
        width: "200px",
        position: "fixed",
        height: "100vh",
        backgroundColor: Colors.white[400],
        borderRight: `solid 1px ${Colors.black[400]}`,
        padding: "50px 0px 0px 10px",
      }}
    >
      <Button
        label={i18n.t("pages.admin.sidebar.products", "Products")}
        icon={<Icons.Edit />}
        path={ROUTE_PATHS.ADMIN}
      />

      <Divider />
      <Button
        label={i18n.t("pages.admin.sidebar.backHome", "Back Home")}
        icon={<Icons.Home />}
        path={ROUTE_PATHS.HOME}
      />
    </Box>
  );
};

export default AdminSideBar;
