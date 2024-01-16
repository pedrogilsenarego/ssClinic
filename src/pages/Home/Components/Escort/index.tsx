import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Image1 from "../../../../assets/Airport.svg";
import Button from "../../../../components/Ui/Button";

const Escort = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const iconSize = mobile ? "20px" : "50px";
  const iconTextSize = mobile ? "8px" : "16px";
  return (
    <div
      style={{
        marginTop: "200px",
        position: "relative",
        width: "100%",
        height: mobile ? "600px" : "670px",
        display: "flex",
        flexDirection: "column",
        rowGap: "100px",
        justifyContent: "center",
      }}
    >
      <img
        alt=""
        style={{
          width: mobile ? "100%" : "50%",
          height: "90vh",
          zIndex: 1,
          position: "absolute",
          objectFit: "cover",
        }}
        src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)"
      />
      <div
        style={{
          paddingTop: "5%",
          margin: mobile ? "0px 20px" : "0px 20%",
          display: "flex",
          zIndex: 10,

          justifyContent: mobile ? "start" : "end",
        }}
      >
        <div
          style={{
            maxWidth: mobile ? undefined : "30%",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            rowGap: "40px",
          }}
        >
          <Typography
            style={{
              textTransform: "uppercase",
              fontSize: mobile ? "8px" : "16px",
            }}
          >
            Concierge Services
          </Typography>
          <Typography
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: mobile ? "28px" : "37px",
            }}
          >
            Acompanhamos a sua viagem
          </Typography>
          <Typography
            style={{
              textTransform: "uppercase",
              fontSize: mobile ? "12px" : "20px",
            }}
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
          columnGap: mobile ? "20px" : "70px",
          width: "100%",
          zIndex: 10,
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
              height: iconSize,
            }}
          />
          <Typography
            style={{ textTransform: "uppercase", fontSize: iconTextSize }}
          >
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
              height: iconSize,
            }}
          />
          <Typography
            style={{ textTransform: "uppercase", fontSize: iconTextSize }}
          >
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
              height: iconSize,
            }}
          />
          <Typography
            style={{ textTransform: "uppercase", fontSize: iconTextSize }}
          >
            Feature Privado
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Escort;
