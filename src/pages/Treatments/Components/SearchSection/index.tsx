import CustomizedAccordions from "../../../../components/Accordion";
import BySpeciality from "./Components/BySpeciality";

const SearchSection = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <BySpeciality />
      <CustomizedAccordions title="Por zonas do corpo">s</CustomizedAccordions>
      <CustomizedAccordions title="Por preocupações">s</CustomizedAccordions>
    </div>
  );
};

export default SearchSection;
