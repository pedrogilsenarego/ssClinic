import { Box, Typography } from "@mui/material";

interface Props {
  helper: string;
  multiline?: boolean;
}

const Input = ({ helper, multiline }: Props) => {
  return (
    <Box
      style={{
        backgroundColor: "#ffffff66",
        borderRadius: "10px",
        padding: "10px",
        height: multiline ? "100px" : "auto",
        boxShadow: "2px 2px 2px #ffffffB3"
      }}
    >
      <Typography>{helper}</Typography>
    </Box>
  );
};

export default Input;
