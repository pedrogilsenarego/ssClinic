import { CSS, Colors } from "../../../theme/theme";

interface Props {
  hover: boolean;
  darkenColors?: boolean;
}

export const buttonStyle = ({ hover, darkenColors }: Props) => ({
  backgroundColor: !hover
    ? darkenColors
      ? Colors.black[40010]
      : Colors.black[40005]
    : darkenColors
    ? Colors.black[40025]
    : Colors.white[40010],
  fontWeight: "bold",
  color: Colors.white[400],
  borderRadius: CSS.borderRadius,
  padding: "10px 15px",
  textTransform: "capitalize",
  marginTop: "5px",
  //border: `solid 2px ${Colors.black[40050]}`,
});
