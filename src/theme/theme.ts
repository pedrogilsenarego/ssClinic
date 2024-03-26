import { createTheme } from "@mui/material/styles";

export const CSS = {
  borderRadiusS: "0px",
  borderRadius: "0px",
  container: "xl",
};

export const Colors = {
  gold: {
    400: "#af865a",
  },
  redish: {
    200: "#ff5959",
    400: "#FF0000",
    40050: "#FF0000A6",
  },
  white: {
    400: "white",
    40010: "#ffffff1A",
    40050: "#ffffff80",
    40075: "#ffffffBF",
    40095: "#ffffffF2",
    40098: "#ffffffFA",
  },
  grey: {
    200: "#898c90",
    400: "#494F55",
    40050: "#494F55A6",
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
    40005: "#1A20320D",
    40025: "#1A203240",
    40080: "#1A2032CC",
  },
};

export const mainColors = {
  primary: {
    400: Colors.blackish[400],
    40005: Colors.blackish[40005],
    40025: Colors.blackish[40025],
    40080: Colors.blackish[40080],
  },
  secondary: {
    400: Colors.redish[400],
    40050: Colors.redish[40050],
  },
};

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'termina', sans-serif",
      fontWeight: 400,
      textTransform: "none",
      fontSize: 16,
      color: Colors.blackish[400],
      caretColor: "transparent",
    },
    h1: {
      fontFamily: "'orpheuspro', serif",
      fontWeight: 400,
    },
    h2: {
      fontFamily: "'termina', sans-serif",
      fontWeight: 500,
      textTransform: "none",
      fontSize: 16,
      color: Colors.blackish[400],
      caretColor: "transparent",
    },

    // Add more variant overrides as needed
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
