import { Box, Card, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Ui/Button";
import { ROUTE_PATHS } from "../../../routes/constants";
import { i18n } from "../../../translations/i18n";
import useStyles from "./styles";

const ManageProducts = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Typography fontSize="16px">
        {i18n.t("pages.admin.manageProducts.title", "Manage products")}
      </Typography>
      <Divider />
      <Box className={classes.root}>
        <Button onClick={() => navigate(ROUTE_PATHS.ADMIN_CREATE_PRODUCT)}>
          {i18n.t("pages.admin.manageProducts.createProduct", "Create Product")}
        </Button>
        <Box style={{ marginTop: "30px" }}>
          <Card style={{ padding: "20px" }}></Card>
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

export default ManageProducts;
