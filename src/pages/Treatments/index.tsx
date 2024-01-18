import { Container, useMediaQuery, useTheme } from "@mui/material";
import SchedulleMembership from "../Complex/Components/SchedulleMembership";
import InitialImage from "./Components/InitialImage";

import InitialSection2 from "./Components/InitialSection2";
import SearchSection from "./Components/SearchSection";

const Treatments = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <div style={{ marginTop: mobile ? "0px" : "200px" }}>
        <InitialImage />
      </div>
      <Container style={{ marginTop: "200px" }} maxWidth="xl">
        <InitialSection2 />
        {/* <InitialSection /> */}
        <SearchSection />
        <div style={{ marginTop: "100px" }}>
          <SchedulleMembership />
        </div>
      </Container>
    </>
  );
};

export default Treatments;
