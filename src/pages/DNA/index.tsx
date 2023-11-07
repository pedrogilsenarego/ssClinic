import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Colors, mainColors } from "../../theme/theme";
import { i18n } from "../../translations/i18n";
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
    // Update the width of the pseudo-element using CSS variables
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
          style={{
            position: "absolute",

            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
          }}
        >
          {" "}
          <Typography fontSize="50px" fontWeight={800} color="red">
            Teste3
          </Typography>
        </Box>
      </Box>
      {/* <Grid container spacing="60px">
        <Grid item xs={6} display="flex" justifyContent="center">
          <Boxify>
            <Title label={i18n.t("pages.dna.theBrand")} />
            <Text
              label={
                "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            ></Text>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qzpnqzpeDsyU0BQxhVQR6NnW0guCQYtD7A&usqp=CAU" />
            <Text
              label={
                "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
            <Text
              label={
                "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </Boxify>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="center">
          <Boxify>
            <Title label={i18n.t("pages.dna.theLogo")} />
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPl19ZYSmtz0ysik-f_dbd76WtqjjFwMwAw&usqp=CAU" />
            <Text
              label={
                "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
            <Text
              label={
                "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
            <Image
              shadow
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NNwjYXFSXqQ6Fj7mFSdpggmkZI53fgoNsg&usqp=CAU"
            />
          </Boxify>
        </Grid>
      </Grid> */}
    </>
  );
};

export default DNA;
