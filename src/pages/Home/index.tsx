import { Typography } from "@mui/material";

import Button from "../../components/Ui/Button";

import ContainerC from "./Components/Container";
import Escort from "./Components/Escort";

const Home = () => {
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
      <ContainerC />
      <Escort />
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
