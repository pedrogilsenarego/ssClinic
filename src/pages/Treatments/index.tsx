import { Container, useMediaQuery, useTheme } from "@mui/material";
import InitialImage from "./Components/InitialImage";

import Escort from "../Home/Components/Escort";
import SpaceWhere from "../Home/Components/SpaceWhere";
import IdentityProtection from "./Components/IdentityProtection";
import InitialSection2 from "./Components/InitialSection2";

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
        <div style={{ marginTop: "200px" }}>
          <IdentityProtection />
        </div>
        {/* <InitialSection /> */}
        {/* <SearchSection /> */}
      </Container>
      <div style={{ marginTop: "400px" }}>
        <Escort />
      </div>
      <div>
        <SpaceWhere />
      </div>
    </>
  );
};

export default Treatments;
