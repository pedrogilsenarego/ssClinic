import { Box, Typography } from "@mui/material";
import Bar from "./Components/Bar";
import "./styles.css"

const Content1 = () => {
  return (
    <Box
      display='flex'
      flexDirection="column"
      justifyContent='end'
      rowGap="10%"
      alignItems="center"
      style={{ padding: "0px 10% 10% 10%", height: "100%" }}
    >
      <Box display="flex" columnGap="1.8em" justifyContent="space-around">
        <Bar title="React" value={9} />
        <Bar title="UI/UX" value={4} />
        <Bar title="NodeJs" value={2} />
        <Bar title="Solidity" value={1} />
        <Bar title="Css" value={6} />

      </Box>
      <Typography
        className="buzzing-element"
        fontSize='1.8em'

      >
        Skills
      </Typography>
    </Box>
  );
};

export default Content1;
