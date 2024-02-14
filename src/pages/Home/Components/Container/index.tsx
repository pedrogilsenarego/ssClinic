import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import logo12 from "../../../../assets/EHTIQ BRANDS-12.svg";
import Button from "../../../../components/Ui/Button";
import { mainColors } from "../../../../theme/theme";
import { i18n } from "../../../../translations/i18n";

const ContainerC = () => {
  type PropsTile = {
    image: string;
    clinic: string;
    subtitles: string[];
  };
  const Tile = ({ image, clinic, subtitles }: PropsTile) => {
    const [hover, setHover] = useState<boolean>(false);
    return (
      <div
        style={{
          position: "relative",
          cursor: "pointer",
          width: "100%",

          aspectRatio: 0.72,
        }}
      >
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
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
            justifyContent: "center",
            transition: "transform 0.5s",
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "60px",
                display: "flex",
                alignItems: "end",
                transform: hover ? "translateY(-40px)" : "none",
                transition: "all ease-in-out 0.5s", // Add transition
              }}
            >
              <Typography
                style={{
                  fontSize: mobile ? "14px" : "18px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  lineHeight: "27px",
                  letterSpacing: "2px",
                  textAlign: "center",
                }}
              >
                {clinic}
              </Typography>
            </div>
            <div
              style={{
                height: "1px",
                width: "40%",
                backgroundColor: "black",
                marginTop: "10px",
                transform: hover ? "translateY(-40px)" : "none",
                transition: "all ease-in-out 0.5s", // Add transition
              }}
            />
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",

                alignItems: "center",
                transition: "all ease-in-out 0.5s",
              }}
            >
              {subtitles.map((title, index) => {
                return (
                  <Typography
                    style={{
                      position: "absolute",
                      textAlign: "center",
                      textDecoration: "underline",
                      transform: `translateY(${index * 34 - 40}px)`,
                      opacity: hover ? 1 : 0,
                      transition: "all ease-in-out 0.5s",
                    }}
                    key={index}
                  >
                    {title}
                  </Typography>
                );
              })}
              <Typography
                style={{
                  transform: hover
                    ? `translateY(${subtitles.length * 34 - 30}px)`
                    : "none",
                  transition: "all ease-in-out 0.5s",
                }}
              >
                {hover ? "-" : "+"}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{ padding: mobile ? undefined : "0px 35px" }}>
      {!mobile && (
        <Typography
          variant="h1"
          style={{
            textAlign: mobile ? "center" : undefined,
            fontSize: mobile ? "14px" : "55px",
            fontWeight: 500,
            fontFamily: "'orpheuspro', sans-serif;",
            letterSpacing: "4px",
          }}
        >
          IN THE PURSUIT OF LONGEVITY
        </Typography>
      )}
    </div>
  );
};

export default ContainerC;
