import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Image1 from "../../assets/Airport.svg";
import Button from "../../components/Ui/Button";
import Title from "../../components/Ui/Title";
import { mainColors } from "../../theme/theme";

const Home = () => {
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
              marginTop: "100px",

              width: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
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
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <img
        src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
        alt=""
        style={{
          height: "85vh",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <Container style={{ marginTop: "64px" }} maxWidth="xl">
        <Title>TagLine TagLine TagLine TagLine TagLine TagLine</Title>
        <Grid
          container
          height="100%"
          width="100%"
          style={{ marginTop: "45px" }}
        >
          <Grid
            item
            xs={6}
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
              style={{ height: "500px", width: "80%", objectFit: "cover" }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              height: "100%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",

                height: "500px",
                rowGap: "20px",
                width: "70%",
              }}
            >
              <Typography
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                }}
              >
                DNA
              </Typography>
              <Typography
                style={{
                  color: mainColors.primary[400],
                }}
              >
                Discover the story behind the building of a watch that was
                created to break wallsDiscover the story behind the building of
                a watch that was created to break wallsDiscover the story behind
                the building of a watch that was created to break walls
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          <Title>The Blend</Title>
        </div>
        <Grid container columnSpacing={"40px"} style={{ marginTop: "75px" }}>
          <Grid item xs={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria"]}
              clinic="Nome clinica 1"
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
          <Grid item xs={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria"]}
              clinic="Nome clinica 1"
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
          <Grid item xs={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria"]}
              clinic="Nome clinica 1"
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
          <Grid item xs={3}>
            <Tile
              subtitles={["Tratamentos", "Consultoria"]}
              clinic="Nome clinica 1"
              image="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            marginTop: "67px",
          }}
        >
          <div
            style={{
              width: "2px",
              height: "111px",
              backgroundColor: "black",
            }}
          ></div>
          <Button style={{ marginTop: "34px" }}>
            <Typography>EXPERT ADVICE</Typography>
          </Button>
        </div>
      </Container>
      <div
        style={{
          marginTop: "200px",
          width: "100%",
          height: "670px",
          display: "flex",
          flexDirection: "column",
          rowGap: "100px",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage:
            "url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)",
        }}
      >
        <div
          style={{
            paddingTop: "5%",
            margin: "0px 20%",
            display: "flex",

            justifyContent: "end",
          }}
        >
          <div
            style={{
              maxWidth: "30%",
              display: "flex",
              flexDirection: "column",

              rowGap: "40px",
            }}
          >
            <Typography style={{ textTransform: "uppercase" }}>
              Concierge Services
            </Typography>
            <Typography
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "37px",
              }}
            >
              Acompanhamos a sua viagem
            </Typography>
            <Typography
              style={{ textTransform: "uppercase", fontSize: "20px" }}
            >
              Subtitulo Subtitulo Subtitulo Subtitulo Subtitulo
            </Typography>

            <Button style={{ marginLeft: "10px", marginRight: "50px" }}>
              <Typography>Solicitar Concierge</Typography>
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            columnGap: "70px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <img
              src={Image1}
              alt=""
              style={{
                height: "50px",
              }}
            />
            <Typography style={{ textTransform: "uppercase" }}>
              Feature Viagem
            </Typography>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <img
              src={Image1}
              alt=""
              style={{
                height: "50px",
              }}
            />
            <Typography style={{ textTransform: "uppercase" }}>
              Feature Transporte
            </Typography>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <img
              src={Image1}
              alt=""
              style={{
                height: "50px",
              }}
            />
            <Typography style={{ textTransform: "uppercase" }}>
              Feature Privado
            </Typography>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "150px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          rowGap: "50px",
          flexDirection: "column",
        }}
      >
        <Typography style={{ fontSize: "25px" }}>
          Conheça o espaço onde cuidamos de si
        </Typography>
        <Button>
          <Typography style={{ textTransform: "uppercase" }}>
            Complexo Ehtiq
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default Home;
