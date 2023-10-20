import { makeStyles } from "@mui/styles";
import { CSS, Colors, mainColors } from "../../../theme/theme";

//interface Props extends CSSProperties {}

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: mainColors.secondary[40050],
    borderRadius: CSS.borderRadius,
    maxWidth: "auto",
    color: "white",

    "& .MuiInputBase-input": {
      color: "white",
      borderRadius: "16px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "20px",
        borderWidth: "0px",
      },
      "&:hover fieldset": {
        borderColor: mainColors.secondary[40050],
        borderRadius: "20px",
      },
      "&.Mui-focused fieldset": {
        borderColor: Colors.blackish[400],
        marginTop: "-3px",
        margin: "-4px",
        borderRadius: "20px",
      },
    },
  },
});

export default useStyles;
