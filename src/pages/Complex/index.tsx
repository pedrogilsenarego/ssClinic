import { Container, Grid, Typography } from "@mui/material";

import { useState } from "react";
import Carousel from "../../components/Carousel";
import Button from "../../components/Ui/Button";
import Title from "../../components/Ui/Title";

const Complex = () => {
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
      <div style={{ marginTop: "230px" }}>
        <Carousel
          navButton
          width={"100%"}
          height={`calc(100vh - 330px)`}
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
            <img
              draggable={false}
              alt=""
              key={item.link}
              src={item.link}
              style={{
                height: `calc(100vh - 330px)`,
                objectFit: "cover",
                width: "100%",
              }}
            />
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
            rowGap: "75px",
          }}
        >
          <Title>Titulo</Title>
          <Grid container columnSpacing={"40px"}>
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
          <Button>
            <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>
              CTA
            </Typography>
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Complex;
