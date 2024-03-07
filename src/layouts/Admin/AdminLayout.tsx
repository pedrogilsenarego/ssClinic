import { Box, Grid } from "@mui/material";
import AdminSideBar from "../../pages/Admin/Presentational/AdminSideBar";

const AdminLayout = (props: any) => {
  return (
    <Box style={{ display: "flex" }}>
      <AdminSideBar />

      <Box style={{ padding: "20px" }}>{props.children}</Box>
    </Box>
  );
};

export default AdminLayout;
