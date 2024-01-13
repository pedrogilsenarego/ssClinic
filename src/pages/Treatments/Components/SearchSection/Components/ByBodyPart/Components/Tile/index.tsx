import { Typography } from "@mui/material";
import { memo, useState } from "react";

type PropsTile = {
  onClick?: any;
  image: string;
  clinicName: string;
  trataments?: string[];
  ref: any;
};

const Tile = memo(
  ({ image, clinicName, onClick, ref }: PropsTile) => {
    const [hover, setHover] = useState<boolean>(false);

    return (
      <div
        ref={ref}
        onClick={onClick ? onClick : undefined}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          cursor: "pointer",
          width: "200px",
          aspectRatio: 0.8,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.5s",
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography style={{ textAlign: "center" }}>
              {clinicName}
            </Typography>
            <Typography
              style={{ textDecoration: "underline", textAlign: "center" }}
            >
              Ver
            </Typography>
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if the props (excluding functions) change
    return (
      prevProps.image === nextProps.image &&
      prevProps.clinicName === nextProps.clinicName &&
      prevProps.trataments === nextProps.trataments
    );
  }
);

export default Tile;
