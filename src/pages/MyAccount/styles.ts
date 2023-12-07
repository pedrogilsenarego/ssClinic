import { makeStyles } from "@mui/styles";

//interface Props extends CSSProperties {}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "60px",
    alignItems: "center",
  },
  form: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    rowGap: "40px",
    maxWidth: "500px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
  },
  register: {
    cursor: "pointer",
  },
});

export default useStyles;
