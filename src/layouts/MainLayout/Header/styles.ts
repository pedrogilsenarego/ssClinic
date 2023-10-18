import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    padding: "10px 0px",
    cursor: "pointer",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
    top: 0,
  },
  subRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: "18px",
  },
});

export default useStyles;
