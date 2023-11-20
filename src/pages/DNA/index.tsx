import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { mainColors } from "../../theme/theme";
import "./index.css";

const DNA = () => {
  const [mouseX, setMouseX] = useState<number>(0);
  const maintext = "Finally a watch that is your...  ";

  useEffect(() => {
    function handleMouseMove(event: { clientX: number; clientY: any }) {
      const xPercentage = (event.clientX / window.innerWidth) * 100;
      setMouseX(xPercentage);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const container = document.querySelector(".container") as HTMLElement;
    const firstBox = document.querySelector(".first-box") as HTMLElement;
    if (container) {
      container.style.setProperty("--cut-width", mouseX + "%");
    }
    if (firstBox) {
      firstBox.style.setProperty("--cut-width", mouseX + "%");
    }
  }, [mouseX]);

  return (
    <>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "120vh",
          alignItems: "top",
          position: "relative",
          marginBottom: "400px",
        }}
      >
        <Box className="first-box">
          <Typography
            className="mainTypo"
            fontWeight={800}
            color={mainColors.primary[400]}
          >
            {maintext}{" "}
            <b style={{ fontFamily: "Gochi Hand", fontSize: "140px" }}>
              Friend
            </b>
          </Typography>
        </Box>
        <Box
          className="container"
          style={{
            position: "absolute",
            backgroundColor: mainColors.primary[400],
            height: "100%",
            display: "flex",
            justifyContent: "center",

            overflow: "hidden",
          }}
        >
          {" "}
          <Typography className="mainTypo" fontWeight={800} color="red">
            {maintext}{" "}
            <b style={{ fontFamily: "Gochi Hand", fontSize: "140px" }}>Enemy</b>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default DNA;
