import { Box, Grid, Typography } from "@mui/material";
import ControlledFormInput from "../../../components/Inputs/ControlledInput";
import Loader from "../../../components/Loader";
import Button from "../../../components/Ui/Button";
import { ROUTE_PATHS } from "../../../routes/constants";
import { i18n } from "../../../translations/i18n";
import useStyles from "./styles";
import useLogin from "./useLogin";

const Login = () => {
  const classes = useStyles();
  const { handleSubmit, onSubmit, control, isLogin, navigate } = useLogin();
  return (
    <>
      {isLogin ? (
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
                    name="email"
                    inputPlaceholder={i18n.t("pages.auth.login.email", "Email")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="password"
                    inputPlaceholder={i18n.t(
                      "pages.auth.login.password",
                      "Password"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    className={classes.register}
                    onClick={() => navigate(ROUTE_PATHS.REGISTER)}
                  >
                    {i18n.t(
                      "pages.auth.login.register",
                      "Not registered yet? Click here"
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Button type="submit">
              {i18n.t("pages.auth.login.login", "Login")}
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default Login;
