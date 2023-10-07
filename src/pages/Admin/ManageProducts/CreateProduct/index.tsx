import { Box, Divider, Typography } from "@mui/material";
import { i18n } from "../../../../translations/i18n";
import useStyles from "./styles";

const CreateProduct = () => {
  const classes = useStyles();
  return (
    <>
      <Typography fontSize="16px">
        {i18n.t(
          "pages.admin.createProducts.title",
          "Manage Products - Create Product"
        )}
      </Typography>
      <Divider />
      <Box className={classes.root}></Box>
    </>
  );
};

export default CreateProduct;
