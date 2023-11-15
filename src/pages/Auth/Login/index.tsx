import { Box, Grid, Typography } from "@mui/material";
import ControlledFormInput from "../../../components/Inputs/ControlledInput";
import Loader from "../../../components/Loader";
import Button from "../../../components/Ui/Button";
import { ROUTE_PATHS } from "../../../routes/constants";
import { Colors, mainColors } from "../../../theme/theme";
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
          <Box>
            <Typography
              style={{
                fontSize: "35px",
                fontWeight: 800,
                textAlign: "center",
                lineHeight: "49px",
              }}
            >
              {i18n.t("pages.auth.login.welcome")}
            </Typography>
            <Typography
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "20px",
                color: mainColors.secondary[400],
              }}
            >
              {i18n.t("pages.auth.login.subWelcome")}
            </Typography>
          </Box>
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
                    type="password"
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
                      "pages.auth.login.forgotPassword",
                      "Forgot your password, click here"
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              style={{
                marginTop: "60px",
                display: "flex",
                flexDirection: "column",
                rowGap: "15px",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                fullWidth
                darkenColors
                type="submit"
                style={{ color: Colors.blackish[400] }}
              >
                {i18n.t("pages.auth.login.login", "Login")}
              </Button>
              <Typography
                onClick={() => navigate(ROUTE_PATHS.REGISTER)}
                style={{
                  color: Colors.blackish[400],
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                {i18n.t("pages.auth.login.newUser")}
              </Typography>
            </Box>
          </form>
        </Box>
      )}
    </>
  );
};

export default Login;
