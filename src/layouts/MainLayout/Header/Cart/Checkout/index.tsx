import { Box, Divider } from "@mui/material";

import ControlledFormInput from "../../../../../components/Inputs/ControlledInput";
import ControlledSelect from "../../../../../components/Inputs/ControlledSelect";
import Loader from "../../../../../components/Loader";
import Button from "../../../../../components/Ui/Button";
import { i18n } from "../../../../../translations/i18n";
import { countryOptions } from "./constants";
import useStyles from "./styles";
import useCheckout from "./useCheckout";
type Props = {
  closeCart: (signal: boolean) => void;
};

const Checkout = ({ closeCart }: Props) => {
  const classes = useStyles();
  const { handleSubmit, onSubmit, control, isPaying } = useCheckout({
    closeCart,
  });
  return (
    <>
      {isPaying ? (
        <Loader customMessage="Payment gooing through" />
      ) : (
        <Box className={classes.root}>
          <form
            className={classes.form}
            id="checkout"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Divider>Personal Data</Divider>
            <ControlledFormInput
              control={control}
              name="email"
              inputPlaceholder={i18n.t("pages.auth.register.email", "E-mail")}
            />
            <ControlledFormInput
              control={control}
              name="phone"
              inputPlaceholder={i18n.t("pages.auth.register.phone", "Phone")}
            />
            <ControlledFormInput
              control={control}
              name="fullName"
              inputPlaceholder={i18n.t(
                "pages.auth.register.fullName",
                "Full Name"
              )}
            />
            <Divider>Address</Divider>
            <ControlledFormInput
              control={control}
              name="address1"
              inputPlaceholder={i18n.t(
                "pages.auth.register.address1",
                "Address line 1"
              )}
            />
            <ControlledFormInput
              control={control}
              name="address2"
              inputPlaceholder={i18n.t(
                "pages.auth.register.address2",
                "Address line 2"
              )}
            />
            <ControlledFormInput
              control={control}
              name="city"
              inputPlaceholder={i18n.t("pages.auth.register.city", "City")}
            />
            <ControlledFormInput
              control={control}
              name="postalCode"
              inputPlaceholder={i18n.t(
                "pages.auth.register.postalCode",
                "Postal Code"
              )}
            />
            <ControlledSelect
              control={control}
              name="country"
              options={countryOptions}
              defaultLabel={countryOptions[0].label}
            />

            <Button type="submit" darkenColors>
              Payment
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default Checkout;
