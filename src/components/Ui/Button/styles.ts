import { Colors } from "../../../theme/theme";

interface Props {
  hover: boolean;
}

export const buttonStyle = ({ hover }: Props) => ({
  backgroundColor: !hover ? Colors.black[40005] : Colors.white[40010],
  fontWeight: "bold",
  color: Colors.white[400],
  borderRadius: "15px",
  padding: "10px 15px",
  textTransform: "capitalize",
  marginTop: "5px",
  //border: `solid 2px ${Colors.black[40050]}`,
});
