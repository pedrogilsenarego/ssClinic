import { Box, Divider, Typography } from "@mui/material";
import ControlledFormInput from "../../../../components/Inputs/ControlledInput";
import Button from "../../../../components/Ui/Button";
import { i18n } from "../../../../translations/i18n";
import useStyles from "./styles";
import useCreateProduct from "./useCreateProduct";

const CreateProduct = () => {
  const classes = useStyles();
  const { handleSubmit, onSubmit, control } = useCreateProduct();
  return (
    <>
      <Typography fontSize="16px">
        {i18n.t(
          "pages.admin.createProducts.title",
          "Manage Products - Create Product"
        )}
      </Typography>
      <Divider />
      <Box className={classes.root}>
        {" "}
        <form
          className={classes.form}
          id="createUser-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box className={classes.inputBox}>
            <ControlledFormInput
              control={control}
              name="model"
              inputPlaceholder={i18n.t(
                "pages.admin.createProducts.form.model",
                "Model"
              )}
            />
          </Box>
          <Button type="submit">
            {i18n.t("pages.admin.createProducts.form.submit", "Create Product")}
          </Button>
        </form>
      </Box>
    </>
  );
};

export default CreateProduct;
