import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Carousel from "../../components/Carousel";
import Button from "../../components/Ui/Button";
import SchedulleMembership from "./Components/SchedulleMembership";
import Team from "./Components/Team";

const Complex = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const childrenData = [
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
    {
      link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    },
  ];

  return (
    <>
      <div style={{ marginTop: mobile ? "100px" : "230px" }}>
        <Carousel
          navButton
          width={"100%"}
          height={mobile ? "600px" : `calc(100vh - 330px)`}
          pauseDuration={3000}
          slideDuration={1000}
          direction={1}
          autoPlay={true}
          pauseOnHover={true}
          tweenAnime="ease"
          dotsActivedColor="black"
          dotsColor="grey"
          onItemClick={(item) => console.log(item)}
        >
          {childrenData.map((item, index) => (
            <div
              draggable={false}
              key={item.link}
              style={{
                backgroundImage: `url(${item.link})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: mobile ? "600px" : `calc(100vh - 330px)`,
                objectFit: "cover",
                width: "100%",
                padding: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  alignItems: "end",
                  height: "100%",
                  rowGap: "10px",
                  paddingBottom: mobile ? "30px" : undefined,
                }}
              >
                <Typography
                  style={{
                    fontSize: mobile ? "14px" : "25px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    width: mobile ? "100%" : "30%",
                    textAlign: "center",
                  }}
                >
                  Título 1-4
                </Typography>
                <Typography
                  style={{
                    fontSize: mobile ? "12px" : "25px",
                    textTransform: "uppercase",
                    width: mobile ? "100%" : "30%",
                    textAlign: "center",
                  }}
                >
                  Descrição Descrição Descrição Descrição Descrição Descrição
                  Descrição Descrição
                </Typography>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Container style={{}} maxWidth="xl">
        <div
          style={{
            marginTop: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: "200px",
          }}
        >
          <Grid container columnSpacing={"20px"}>
            <Grid item xs={6}>
              <div
                style={{
                  marginTop: "50px",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "40px",
                }}
              >
                <div style={{ display: "flex", columnGap: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      whiteSpace: "nowrap",
                      fontSize: "19px",
                    }}
                  >
                    <Typography
                      style={{
                        transform: "rotate(180deg)", // Rotate 180 degrees
                        transformOrigin: "center",
                      }}
                    >
                      Legenda 1
                    </Typography>
                  </div>
                  <img
                    src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                    alt=""
                    style={{
                      height: "340px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div>
                  <div style={{ display: "flex", columnGap: "10px" }}>
                    <div
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        whiteSpace: "nowrap",
                        fontSize: "19px",
                        width: "400px",
                      }}
                    >
                      <Typography
                        style={{
                          transform: "rotate(180deg)", // Rotate 180 degrees
                          transformOrigin: "center",
                        }}
                      >
                        Legenda 1
                      </Typography>
                    </div>
                    <img
                      src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                      alt=""
                      style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div style={{ display: "flex", columnGap: "10px" }}>
                <img
                  src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                  alt=""
                  style={{
                    width: "550px",
                    height: "550px",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    whiteSpace: "nowrap",
                    fontSize: "19px",
                  }}
                >
                  <Typography>Legenda 2</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container columnSpacing={"20px"}>
            <Grid item xs={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "30px",
                }}
              >
                <Typography
                  style={{
                    width: "50%",
                    textTransform: "uppercase",
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                >
                  De olhos na personalização
                </Typography>

                <div
                  style={{
                    marginLeft: "10%",
                    borderLeft: "solid 2px black",
                    width: "60%",
                    padding: "20px",
                  }}
                >
                  <Typography style={{ fontSize: "20px" }}>
                    Descrever serviço personalizado Descrever serviço
                    personalizado
                  </Typography>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                    paddingRight: "200px",
                  }}
                >
                  <Button>CTA</Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              {" "}
              <img
                src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                alt=""
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Grid>
          </Grid>
          <Team />
          <SchedulleMembership />
        </div>
      </Container>
    </>
  );
};

export default Complex;
