import { Container, useMediaQuery, useTheme } from "@mui/material";

import SchedulleMembership from "../Complex/Components/SchedulleMembership";
import EhtiqCode from "./Components/EhtiqCode";
import Journey from "./Components/Journey";
import Location from "./Components/Location";
import ProtectingIdentity from "./Components/ProtectingIdentity";

import IdentityProtection from "../Treatments/Components/IdentityProtection";
import Slogan from "./Components/Slogan";
import Values from "./Components/Values";

const About = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div style={{ marginTop: "300px" }}>{!mobile && <Slogan />}</div>
      <Location />
      <Values />
      {!mobile && (
        <div style={{ marginTop: "300px" }}>
          <Journey />
        </div>
      )}

      <Container style={{}} maxWidth="xl">
        <div style={{ marginTop: "300px" }}>
          <IdentityProtection />
        </div>
        <div style={{ marginTop: "300px" }}>
          <SchedulleMembership />
        </div>
      </Container>
    </>
  );
};

export default About;
