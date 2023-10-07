import { makeStyles } from "@mui/styles";

//interface Props extends CSSProperties {}

const useStyles = makeStyles({
  root: {
    padding: "80px 40px 0px 40px",
  },
  form: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    rowGap: "40px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
  },
});

export default useStyles;
