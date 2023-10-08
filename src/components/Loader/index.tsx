import { Typography } from "@mui/material";
import { Ellipsis } from "react-spinners-css";
import { Colors } from "../../theme/theme";

interface Props {
  size?: number;
  color?: string;
  customMessage?: string;
  progress?: number;
  colorMessage?: string;
}

const Loader = ({
  size = 100,
  color,
  customMessage,
  progress,
  colorMessage,
}: Props) => {
  const progressW = progress ? `${progress}%` : "";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography color={colorMessage || Colors.black[400]} fontSize="20px">
        {customMessage} {progressW}
      </Typography>
      <Ellipsis size={size || 100} color={color || Colors.black[40050]} />
    </div>
  );
};

export default Loader;
