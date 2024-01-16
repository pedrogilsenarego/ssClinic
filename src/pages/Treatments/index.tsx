import { Container, Typography } from "@mui/material";
import SchedulleMembership from "../Complex/Components/SchedulleMembership";
import InitialSection from "./Components/InitialSection";
import SearchSection from "./Components/SearchSection";

const Treatments = () => {
  return (
    <>
      <Container style={{ marginTop: "300px" }} maxWidth="xl">
        <InitialSection />
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
        <div style={{ marginTop: "100px" }}>
          <SchedulleMembership />
        </div>
      </Container>
    </>
  );
};

export default Treatments;
