import { Container, Typography } from "@mui/material";
import SchedulleMembership from "../Complex/Components/SchedulleMembership";
import InitialSection from "./Components/InitialSection";
import SearchSection from "./Components/SearchSection";

const Treatments = () => {
  return (
    <>
      <Container style={{ marginTop: "300px" }} maxWidth="xl">
        <InitialSection />
        <SearchSection />
        <div style={{ marginTop: "100px" }}>
          <SchedulleMembership />
        </div>
      </Container>
    </>
  );
};

export default Treatments;
