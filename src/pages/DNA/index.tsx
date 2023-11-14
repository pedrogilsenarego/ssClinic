import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { mainColors } from "../../theme/theme";
import "./index.css";

const DNA = () => {
  const [mouseX, setMouseX] = useState<number>(0);

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
    if (container) {
      container.style.setProperty("--cut-width", mouseX + "%");
    }
  }, [mouseX]);

  return (
    <>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "80vh",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          className="first-box"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Typography
            fontSize="50px"
            fontWeight={800}
            color={mainColors.primary[400]}
          >
            Teste
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
            alignItems: "center",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          {" "}
          <Typography fontSize="50px" fontWeight={800} color="red">
            Teste3
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default DNA;
