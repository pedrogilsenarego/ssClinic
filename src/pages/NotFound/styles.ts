import { makeStyles } from "@mui/styles";

//interface Props extends CSSProperties {}

const useStyles = makeStyles({
  root: {
    padding: "28px 40px 0px 40px",
    height: "100%",
    display: "flex",
    width: "90%",

    justifyContent: "center",
    alignItems: "center",
  },
  subRoot: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    alignItems: "center",
  },
});

export default useStyles;
