import { createTheme } from "@mui/material/styles";

export const CSS = {
  borderRadius: "10px",
};

export const Colors = {
  redish: {
    400: "#FF0000",
    40050: "#FF0000A6",
  },
  white: {
    400: "white",
    40010: "#ffffff1A",
    40050: "#ffffff80",
    40075: "#ffffffBF",
  },

  black: {
    400: "#000000",
    40001: "#00000003",
    40005: "#0000000D",
    40010: "#0000001A",
    40025: "#00000040",
    40050: "#00000080",
  },
  blackish: {
    400: "#1A2032",
  },
};

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 400,
      textTransform: "none",
      fontSize: 16,
      color: Colors.blackish[400],
      caretColor: "transparent",
    },
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
