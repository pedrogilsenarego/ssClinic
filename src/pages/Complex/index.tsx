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
          navButton={mobile ? false : true}
          width={"100%"}
          height={mobile ? "600px" : `calc(100vh - 330px)`}
          pauseDuration={3000}
          slideDuration={1000}
          direction={1}
          autoPlay={mobile ? false : true}
          pauseOnHover={true}
          tweenAnime="ease"
          dotsActivedColor="black"
          dotsColor="grey"
          dragThreshold={mobile ? 10 : undefined}
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
                padding: mobile ? "40px" : "50px",
                paddingBottom: mobile ? undefined : "100px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  alignItems: "end",
                  height: "100%",
                  rowGap: "30px",
                  paddingBottom: mobile ? "30px" : undefined,
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    fontSize: mobile ? "14px" : "25px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    width: mobile ? "100%" : "25%",
                    textAlign: "center",
                  }}
                >
                  Título 1-4
                </Typography>
                <Typography
                  style={{
                    fontSize: mobile ? "12px" : "17px",
                    textTransform: "uppercase",
                    width: mobile ? "100%" : "25%",
                    letterSpacing: "2px",
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
          <Grid container columnSpacing={"50px"}>
            <Grid item xs={12} md={6}>
              <div
                style={{
                  marginTop: "50px",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "40px",
                }}
              >
                <div style={{ display: "flex", columnGap: "10px" }}>
                  {!mobile && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Typography
                        style={{
                          transform: "rotate(180deg)",
                          transformOrigin: "center",
                          fontSize: "17px",
                        }}
                      >
                        Legenda 1
                      </Typography>
                    </div>
                  )}
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
                    {!mobile && (
                      <div
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          whiteSpace: "nowrap",

                          width: "400px",
                        }}
                      >
                        <Typography
                          style={{
                            transform: "rotate(180deg)", // Rotate 180 degrees
                            transformOrigin: "center",
                            fontSize: "17px",
                          }}
                        >
                          Legenda 2
                        </Typography>
                      </div>
                    )}
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
              xs={12}
              md={6}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", columnGap: "10px" }}>
                <img
                  src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
                  alt=""
                  style={{
                    width: "100%",
                    height: "550px",
                    objectFit: "cover",
                  }}
                />
                {!mobile && (
                  <div
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Typography style={{ fontSize: "17px" }}>
                      Legenda 3
                    </Typography>
                  </div>
                )}
              </div>
              <Typography
                style={{
                  textTransform: "uppercase",
                  marginTop: "40px",
                  marginLeft: "20px",
                  width: mobile ? "100%" : "90%",
                  textAlign: mobile ? "center" : undefined,
                  fontSize: mobile ? "10px" : "15px",
                  letterSpacing: "1px",
                }}
              >
                Elegância e inovação, onde cada espaço é uma celebração da
                estética.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={"20px"}>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "50px",
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    width: mobile ? undefined : "50%",
                    textTransform: "uppercase",
                    fontSize: mobile ? "22px" : "32px",
                    fontWeight: 500,
                    margin: mobile ? "20px" : undefined,
                    letterSpacing: "2px",
                  }}
                >
                  De olhos
                  <div style={{ display: "flex", columnGap: "10px" }}>
                    <Typography
                      variant="h1"
                      style={{
                        textTransform: "uppercase",
                        fontSize: mobile ? "22px" : "32px",
                        fontWeight: 500,
                        margin: mobile ? "20px" : undefined,
                        letterSpacing: "2px",
                      }}
                    >
                      na
                    </Typography>
                    <Typography
                      variant="h1"
                      style={{
                        fontStyle: "italic",
                        textTransform: "capitalize",
                        fontSize: mobile ? "22px" : "32px",
                        letterSpacing: "2px",
                      }}
                    >
                      personalização
                    </Typography>
                  </div>
                </Typography>

                <div
                  style={{
                    marginLeft: "10px",
                    borderLeft: "solid 2px black",
                    width: "70%",
                    padding: mobile ? "10px" : "20px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: mobile ? "12px" : "15px",
                      letterSpacing: "1px",
                      lineHeight: "25px",
                      fontWeight: 400,
                    }}
                  >
                    Na EHTIQ a personalização é a essência da nossa filosofia.
                    Moldamos cada tratamento para refletir as suas aspirações.
                  </Typography>
                  <Typography
                    style={{
                      marginTop: "20px",
                      marginLeft: "20px",
                      fontSize: mobile ? "10px" : "12px",
                      letterSpacing: "1px",
                      lineHeight: "25px",
                      fontWeight: 400,
                    }}
                  >
                    Acreditamos que a beleza é uma jornada individual, feita à
                    sua medida para realçar a sua singularidade.
                  </Typography>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                    paddingRight: mobile ? undefined : "200px",
                  }}
                >
                  <Button>
                    <Typography style={{ fontSize: mobile ? "12px" : "16px" }}>
                      Experiência
                    </Typography>
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
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
