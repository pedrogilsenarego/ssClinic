import SchedulleMembership from "../Complex/Components/SchedulleMembership";
import Tagline from "./Components/Tagline";

const Membership = () => {
  return (
    <>
      <div>
        <Tagline />
      </div>
      <div style={{ marginTop: "100px" }}>
        <SchedulleMembership />
      </div>
    </>
  );
};

export default Membership;
