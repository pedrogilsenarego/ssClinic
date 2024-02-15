import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Values = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={{
        width: "100vw",
        marginTop: "200px",
        backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: mobile ? "100px 20px" : "132px 400px 122px 400px",
      }}
    >
      <div
        style={{
          backgroundColor: mobile ? undefined : "lightgray",
          padding: mobile ? "0px" : "150px 116px 68px 90px",
        }}
      >
        <Typography
          variant="h1"
          style={{
            textTransform: "uppercase",
            fontSize: mobile ? "19px" : "27px",
            letterSpacing: "1px",
            lineHeight: "27px",
            textAlign: "center",
          }}
        >
          VALORES QUE REPRESENTAM{" "}
        </Typography>
        <Typography
          variant="h1"
          style={{
            marginTop: mobile ? "5px" : "20px",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: mobile ? "19px" : "27px",
            fontWeight: 700,
            letterSpacing: "1px",
            lineHeight: "27px",
          }}
        >
          EXCELÊNCIA
        </Typography>
        <div
          style={{
            marginTop: "106px",
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
              flexDirection: mobile ? "column" : "row",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: "40px",
                  color: "gray",
                  display: "flex",
                  width: "50px",
                  height: "50px",
                  fontWeight: 600,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                E
              </Typography>
            </div>
            <Typography
              style={{
                textAlign: "center",
                width: mobile ? "90%" : undefined,
                fontSize: mobile ? "11px" : "14px",
                letterSpacing: "1px",
                lineHeight: mobile ? "18px" : "25px",
              }}
            >
              <b style={{ textTransform: "uppercase" }}>Elegância</b> Reflete a
              abordagem sofisticada e atenta aos detalhes, criando um ambiente
              esteticamente agradável e acolhedor.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
              flexDirection: mobile ? "column" : "row",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: "40px",
                  color: "gray",
                  display: "flex",
                  width: "50px",
                  fontWeight: 600,
                  height: "50px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                H
              </Typography>
            </div>
            <Typography
              style={{
                textAlign: "center",
                width: mobile ? "90%" : undefined,
                fontSize: mobile ? "11px" : "14px",
                letterSpacing: "1px",
                lineHeight: mobile ? "18px" : "25px",
              }}
            >
              <b style={{ textTransform: "uppercase" }}>Harmonia</b> A constante
              procura pelo equilíbrio entre tecnologia avançada e atendimento
              personalizado.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
              flexDirection: mobile ? "column" : "row",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: "40px",
                  color: "gray",
                  fontWeight: 600,
                  display: "flex",
                  width: "50px",
                  height: "50px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                T
              </Typography>
            </div>
            <Typography
              style={{
                textAlign: "center",
                width: mobile ? "90%" : undefined,
                fontSize: mobile ? "11px" : "14px",
                letterSpacing: "1px",
                lineHeight: mobile ? "18px" : "25px",
              }}
            >
              <b style={{ textTransform: "uppercase" }}>Tranquilidade</b> Traduz
              o compromisso em oferecer um espaço de paz e serenidade, para que
              se sinta seguro e cuidado.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
              flexDirection: mobile ? "column" : "row",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: "40px",
                  color: "gray",
                  display: "flex",
                  width: "50px",
                  fontWeight: 600,
                  height: "50px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                I
              </Typography>
            </div>
            <Typography
              style={{
                textAlign: "center",
                width: mobile ? "90%" : undefined,
                fontSize: mobile ? "11px" : "14px",
                letterSpacing: "1px",
                lineHeight: mobile ? "18px" : "25px",
              }}
            >
              <b style={{ textTransform: "uppercase" }}>Inovação</b> Motivados a
              superar os limites do possível, trazendo novas soluções para o
              cuidado e bem-estar dos nossos pacientes.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
              flexDirection: mobile ? "column" : "row",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: "40px",
                  color: "gray",
                  display: "flex",
                  width: "50px",
                  fontWeight: 600,
                  height: "50px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Q
              </Typography>
            </div>
            <Typography
              style={{
                textAlign: "center",
                width: mobile ? "90%" : undefined,
                fontSize: mobile ? "11px" : "14px",
                letterSpacing: "1px",
                lineHeight: mobile ? "18px" : "25px",
              }}
            >
              <b style={{ textTransform: "uppercase" }}>Qualidade</b> O pilar
              sobre o qual todos os nossos serviços são construídos, garantindo
              excelência em cada interação e tratamento.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
