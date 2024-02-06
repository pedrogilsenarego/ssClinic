import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import logo12 from "../../../../assets/EHTIQ BRANDS-12.svg";
import Button from "../../../../components/Ui/Button";
import Title from "../../../../components/Ui/Title";
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
            <Typography
              style={{
                fontSize: "23px",
                textTransform: "uppercase",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {clinic}
            </Typography>
            <div
              style={{
                height: "1px",
                width: "40%",
                backgroundColor: "black",
                marginTop: "10px",
              }}
            />
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
              }}
            >
              {!hover ? (
                <>
                  <Typography>+</Typography>
                </>
              ) : (
                <>
                  {" "}
                  {subtitles.map((title, index) => {
                    return (
                      <Typography
                        style={{
                          textAlign: "center",
                          textDecoration: "underline",
                          fontSize: "18px",
                          opacity: hover ? 1 : 0,
                          transition: "all ease-in-out 0.5s",
                        }}
                        key={index}
                      >
                        {title}
                      </Typography>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Typography
        style={{
          textAlign: mobile ? "center" : undefined,
          fontSize: mobile ? "14px" : "60px",
          fontWeight: 500,
        }}
      >
        IN THE PURSUIT OF LONGEVITY
      </Typography>

      <Grid
        container
        height="100%"
        width="100%"
        rowSpacing={"50px"}
        style={{ marginTop: mobile ? "0px" : "45px" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            alt=""
            style={{
              height: mobile ? "250px" : "500px",
              width: "80%",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            height: mobile ? undefined : "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: mobile ? "center" : "center",
              justifyContent: "center",

              height: mobile ? undefined : "500px",
              rowGap: "20px",
              width: "70%",
            }}
          >
            <Typography
              style={{
                textTransform: "uppercase",
                textAlign: mobile ? "center" : "center",
                fontSize: mobile ? "14px" : "20px",
                fontWeight: 600,
              }}
            >
              {i18n.t("pages.home.beutyAndWellBeing")}
            </Typography>
            <Typography
              style={{
                textAlign: mobile ? "center" : "center",
                color: mainColors.primary[400],
                fontSize: mobile ? "12px" : "18px",
              }}
            >
              {i18n.t("pages.home.beutyText")}
            </Typography>
            <img src={logo12} alt="" style={{ width: "90px" }} />
          </Box>
        </Grid>
      </Grid>
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #848387, #314F5F4A)",
          padding: "50px 100px 100px 120px",
          justifyContent: "center",
          marginTop: "200px",
          position: "relative",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Typography
            style={{
              color: "white",
              textTransform: "uppercase",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {i18n.t("pages.home.treatments")}
          </Typography>
        </div>

        <Grid
          container
          spacing={mobile ? "10px" : "40px"}
          style={{ marginTop: "75px" }}
        >
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria"]}
              clinic={i18n.t("pages.home.cirurgy")}
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria"]}
              clinic={i18n.t("pages.home.dental")}
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria"]}
              clinic={i18n.t("pages.home.nonCirurgy")}
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria"]}
              clinic={i18n.t("pages.home.healthPrevention")}
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
        </Grid>
        <div
          style={{
            position: "absolute",
            width: "1px",
            left: "50%",
            height: "111px",
            bottom: -80,
            backgroundColor: "#8C8787",
            zIndex: 10,
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "20px",
          marginTop: "100px",
        }}
      >
        <Typography style={{ fontSize: "13px" }}>
          {" "}
          {i18n.t("pages.home.correctTreatment")}
        </Typography>
        <Button>
          <Typography style={{ fontSize: "22px", color: "#5D5C5C" }}>
            EXPERT ADVICE
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default ContainerC;
