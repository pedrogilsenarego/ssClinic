import { createTheme } from "@mui/material/styles";

export const Colors = {
  white: {
    400: "white",
    40050: "#ffffff80",
    40075: "#ffffffBF",
  },

  black: {
    400: "#000000",
    40010: "#0000001A",
    40025: "#00000040",
    40050: "#00000080",
  },
};

export const theme = createTheme({
  typography: {
    //fontFamily: ["Open Sans"].join(","),
  },
  palette: {
    primary: {
      main: "#fffff",
    },
    secondary: {
      main: "#fffff",
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:hover": {
            //backgroundColor: "red",
          },
          "&:active": {
            //backgroundColor: "red",
          },
          "&:focus": {
            //backgroundColor: "red",
          },
        },
      },
    },
  },
});

export default theme;
