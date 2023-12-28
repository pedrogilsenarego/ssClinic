import { Box } from "@mui/material";

interface Props {
  tileIndex: number;
  index: number;
  position: string;
  setTileIndex: (tileIndex: number) => void;
  content?: JSX.Element;
}

const Tile = ({ tileIndex, index, position, setTileIndex, content }: Props) => {
  const left = () => {
    if (position === "front") return 0;
    if (position === "left") return "-32%";
    if (position === "right") return "32%";
    else return 0;
  };
  const right = () => {
    if (position === "front") return 0;
    if (position === "left") return "32%";
    if (position === "right") return "-32%";
    else return 0;
  };

  return (
    <Box
      onClick={() => setTileIndex(index)}
      style={{
        cursor: "pointer",
        position: "absolute",
        padding: "20px",
        top: 0,
        bottom: 0,
        marginTop: "auto",
        marginBottom: "auto",
        left: left(),
        right: right(),
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: position === "front" ? 1000 : 1,
        height: "85vh",
        width: "85vh",
        backgroundColor: tileIndex === 1 ? "#0E0A09CC" : "#0E0A09",
        borderRadius: "9%",
        transition: "all 2s ease",
        boxShadow: "5px 5px 5px #00000066",
        transform:
          position === "front" && tileIndex === 1
            ? "scale(0.85) perspective(800px) rotateX(55deg)"
            : position === "front"
              ? "scale(1)"
              : position === "back" ? "scale(0.45)" : "scale(0.65)",
      }}
    >

      {content}
    </Box>
  );
};

export default Tile;
