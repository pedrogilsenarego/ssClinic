import CustomizedAccordions from "../../../../components/Accordion";
import ByBodyPart from "./Components/ByBodyPart";

import BySpeciality from "./Components/BySpeciality";

const SearchSection = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <BySpeciality />
      <ByBodyPart />
      <CustomizedAccordions title="Por preocupações">s</CustomizedAccordions>
    </div>
  );
};

export default SearchSection;
