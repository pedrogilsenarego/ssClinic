import { Box } from "@mui/material";
import Header from "./Header";
interface HomepageLayoutProps {
  children: React.ReactNode;
  hasHeader?: boolean;
}

const HomepageLayout = ({
  children,
  hasHeader = true,
}: HomepageLayoutProps) => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "whitesmoke", overflow: "hidden" }}
    >
      <Box
        height="100%"
        width="100%"
        display="flex"
        flexDirection="column"
        //alignItems="center"
      >
        {hasHeader && <Header />}
        {children}
      </Box>
    </Box>
  );
};

export default HomepageLayout;
