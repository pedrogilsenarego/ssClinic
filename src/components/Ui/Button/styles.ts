import { CSS, Colors } from "../../../theme/theme";

interface Props {
  hover: boolean;
  darkenColors?: boolean;
  lightenColor?: boolean;
  mobile?: boolean;
}

export const buttonStyle = ({
  hover,
  darkenColors,
  lightenColor,
  mobile,
}: Props) => ({
  backgroundColor: hover
    ? lightenColor
      ? Colors.white[40010]
      : darkenColors
      ? Colors.black[40010]
      : Colors.black[40005]
    : lightenColor
    ? Colors.white[40050]
    : darkenColors
    ? Colors.black[40025]
    : Colors.white[40010],
  fontWeight: "bold",
  color: Colors.white[400],
  borderRadius: "40px",
  padding: mobile ? "2px 10px" : "2px 40px",
  textTransform: "capitalize",
  marginTop: "5px",
  border: `solid 2px ${Colors.black[40050]}`,
});
