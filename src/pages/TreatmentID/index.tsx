import { Container, Typography } from "@mui/material";
import Description from "./Components/Description";
import TreatmentsGuide from "./Components/TreatmentsGuide";

const TreatmentID = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "350px",
          display: "flex",
          alignItems: "end",
          padding: "30px 10%",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url(https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)`,
        }}
      >
        <Typography
          style={{
            textTransform: "uppercase",
            fontSize: "20px",

            fontWeight: "bold",
          }}
        >
          A02 Nome do tratamento
        </Typography>
      </div>
      <Container maxWidth={"xl"}>
        <div style={{ marginTop: "50px" }}>
          <Description />
        </div>
        <div style={{ marginTop: "150px" }}>
          <TreatmentsGuide />
        </div>
      </Container>
    </>
  );
};

export default TreatmentID;
