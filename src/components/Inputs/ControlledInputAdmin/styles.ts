import { makeStyles } from "@mui/styles";

//interface Props extends CSSProperties {}

const useStyles = ({ type }: any) =>
  makeStyles({
    root: {
      width: "100%",
      fontSize: "13px",
      maxWidth: "auto",
      color: "#848484",
      borderRadius: "15px",

      "& .MuiInputBase-input": {
        borderRadius: type === "search" ? "15px" : "10px",
        fontSize: "13px",
        color: "#848484",
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderRadius: type === "search" ? "15px" : "10px",
          fontSize: "13px",
          color: "#848484",
          display: "flex",
          alignItems: "center",
        },
        "&:hover fieldset": {
          borderRadius: type === "search" ? "15px" : "10px",
          fontSize: "13px",
          color: "#848484",
          display: "flex",
          alignItems: "center",
        },
        "&.Mui-focused fieldset": {
          borderRadius: type === "search" ? "15px" : "10px",
          fontSize: "13px",
          color: "#848484",
          display: "flex",
          alignItems: "center",
        },
      },
    },
  });

export default useStyles;
