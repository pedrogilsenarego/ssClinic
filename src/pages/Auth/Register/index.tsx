import { Box, Divider, Grid } from "@mui/material";
import ControlledFormInput from "../../../components/Inputs/ControlledInput";
import ControlledSelect from "../../../components/Inputs/ControlledSelect";
import DateInput from "../../../components/Inputs/DateControlledInput";
import Loader from "../../../components/Loader";
import Button from "../../../components/Ui/Button";
import { i18n } from "../../../translations/i18n";
import { countryOptions } from "./constants";
import useStyles from "./styles";
import useRegister from "./useRegister";

const Register = () => {
  const classes = useStyles();
  const { handleSubmit, onSubmit, control, isRegistering } = useRegister();
  return (
    <>
      {isRegistering ? (
        <Loader
          customMessage={i18n.t(
            "pages.auth.register.loaderMessage",
            "Creating new user"
          )}
        />
      ) : (
        <Box className={classes.root}>
          {" "}
          <form
            className={classes.form}
            id="login-in"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box className={classes.inputBox}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Divider>User Data</Divider>
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="username"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.username",
                      "Username"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="email"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.email",
                      "E-mail"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    type="password"
                    name="password"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.password",
                      "Password"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    type="password"
                    name="confirmPassword"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.confirmPassword",
                      "Confirm password"
                    )}
                  />
                </Grid>
                <Grid item xs={12} mt="50px">
                  <Divider>Personal Data</Divider>
                </Grid>
                <Grid item xs={6}>
                  <DateInput
                    control={control}
                    name="birthday"
                    label={i18n.t("pages.auth.register.birthday", "Birthday")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="phone"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.phone",
                      "Phone"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="fullName"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.fullName",
                      "Full Name"
                    )}
                  />
                </Grid>
                <Grid item xs={12} mt="50px">
                  <Divider>Address</Divider>
                </Grid>

                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="address1"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.address1",
                      "Address line 1"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="address2"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.address2",
                      "Address line 2"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="city"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.city",
                      "City"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="postalCode"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.postalCode",
                      "Postal Code"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledSelect
                    control={control}
                    name="country"
                    options={countryOptions}
                    defaultLabel={countryOptions[0].label}
                  />
                </Grid>
              </Grid>
            </Box>
            <Button type="submit">
              {i18n.t("pages.auth.register.register", "Register")}
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default Register;
