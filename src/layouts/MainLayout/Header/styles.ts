import { makeStyles } from "@mui/styles";
import { Colors } from "../../../theme/theme";

const useStyles = makeStyles({
  root: {
    padding: "30px 0px 0px 0px",
    backgroundColor: Colors.white[40098],
    position: "fixed",
    width: "100%",
    zIndex: 1000,
    //top: 0,
    boxShadow: `1px 1px 10px ${Colors.black[40025]}`,
  },
  subRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    cursor: "pointer",
    fontSize: "14px",
  },
});

export default useStyles;
