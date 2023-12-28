import { Box, Card, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import TableList from "../../../components/TableList";
import Button from "../../../components/Ui/Button";
import { ROUTE_PATHS } from "../../../routes/constants";
import { i18n } from "../../../translations/i18n";
import { tableColumns } from "./constants";
import useStyles from "./styles";
import useManageProducts from "./useManageProducts";

const ManageBlog = () => {
  const classes = useStyles();
  const { handleAction, productsData, isDeletingProduct } = useManageProducts();
  const navigate = useNavigate();

  return (
    <>
      <Typography fontSize="16px">
        {i18n.t("pages.admin.manageProducts.title", "Manage products")}
      </Typography>
      <Divider />
      <Box className={classes.root}>
        <Button
          darkenColors
          onClick={() => navigate(ROUTE_PATHS.ADMIN_CREATE_BLOG)}
        >
          Create Blog entry
        </Button>
        <Box style={{ marginTop: "30px" }}>
          <Card style={{ padding: "20px" }}>
            {isDeletingProduct ? (
              <Loader customMessage="Deleting Product" />
            ) : (
              <TableList
                columns={tableColumns}
                rows={productsData}
                onAction={handleAction}
              />
            )}
          </Card>
          <Box
            display="flex"
            justifyContent="start"
            style={{ marginTop: "40px" }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default ManageBlog;
