import { Container, Grid, Typography } from "@mui/material";

import Carousel from "../../components/Carousel";
import Button from "../../components/Ui/Button";
import SearchSection from "./Components/SearchSection";

const childrenData = [
  {
    link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    title: "Tratamento 1",
    description: "Descrição Descrição Descrição Descrição Descrição Descrição",
  },
  {
    link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    title: "Tratamento 1",
    description: "Descrição Descrição Descrição Descrição Descrição Descrição",
  },
  {
    link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    title: "Tratamento 1",
    description: "Descrição Descrição Descrição Descrição Descrição Descrição",
  },
  {
    link: "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
    title: "Tratamento 1",
    description: "Descrição Descrição Descrição Descrição Descrição Descrição",
  },
];

const Treatments = () => {
  return (
    <>
      <Container style={{ marginTop: "300px" }} maxWidth="xl">
        <Grid
          container
          height="100%"
          width="100%"
          style={{ marginTop: "45px" }}
          spacing={"50px"}
        >
          <Grid item xs={6}>
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                columnGap: "20px",
              }}
            >
              <div>
                <Typography
                  style={{ textTransform: "uppercase", fontSize: "18px" }}
                >
                  Tratamentos de
                </Typography>
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontSize: "45px",
                    fontStyle: "italic",
                  }}
                >
                  Assinatura
                </Typography>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "black",
                }}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ position: "relative" }}>
              <Carousel
                width={"100%"}
                height={"400px"}
                pauseDuration={3000}
                slideDuration={1000}
                direction={1}
                autoPlay={false}
                pauseOnHover={true}
                tweenAnime="ease"
                dotsActivedColor="black"
                dotsColor="grey"
                onItemClick={(item) => console.log(item)}
              >
                {childrenData.map((item, index) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "30px",
                    }}
                  >
                    <img
                      draggable={false}
                      alt=""
                      key={item.link}
                      src={item.link}
                      style={{
                        height: `200px`,
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                    <div
                      style={{
                        maxWidth: "50%",
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "30px",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "22px", fontWeight: "bold" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography>{item.description}</Typography>
                    </div>
                  </div>
                ))}
              </Carousel>
              <div
                style={{
                  position: "absolute",
                  right: 20,
                  bottom: 40,
                }}
              >
                <Button>
                  <Typography style={{ textTransform: "uppercase" }}>
                    Abrir agenda
                  </Typography>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
        <div
          style={{
            marginTop: "150px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
          }}
        >
          <Typography
            style={{
              textAlign: "center",
              color: "lightGrey",
              fontWeight: "20px",
              textTransform: "uppercase",
            }}
          >
            Pesquisa de tratamentos
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "28px",
              textTransform: "uppercase",
            }}
          >
            Titulo relacionado com a pesquisa
          </Typography>
        </div>
        <SearchSection />
      </Container>
    </>
  );
};

export default Treatments;
