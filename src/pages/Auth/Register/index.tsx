import { Box, Grid } from "@mui/material";
import ControlledFormInput from "../../../components/Inputs/ControlledInput";
import Loader from "../../../components/Loader";
import Button from "../../../components/Ui/Button";
import { i18n } from "../../../translations/i18n";
import useStyles from "./styles";
import useRegister from "./useRegister";

const Register = () => {
  const classes = useStyles();
  const { handleSubmit, onSubmit, control, isRegistering } = useRegister();
  return (
    <>
      {isRegistering ? (
        <Loader
          customMessage={i18n.t("pages.auth.login.loaderMessage", "Logging in")}
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
                  <ControlledFormInput
                    control={control}
                    name="username"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.username",
                      "Username"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="email"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.email",
                      "E-mail"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    password
                    name="password"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.password",
                      "Password"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    password
                    name="confirmPassword"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.confirmPassword",
                      "Confirm password"
                    )}
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
