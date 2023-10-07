import { CSSProperties } from "react";
import { Colors } from "../../../theme/theme";

export const buttonStyle: CSSProperties = {
  backgroundColor: Colors.white[400],
  fontWeight: "bold",
  color: Colors.black[400],
  borderRadius: "10px",
  textTransform: "capitalize",
  marginTop: "5px",
  border: `solid 2px ${Colors.black[40050]}`,
};
