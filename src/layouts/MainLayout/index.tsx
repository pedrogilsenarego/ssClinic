import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes/constants";
interface HomepageLayoutProps {
  children: React.ReactNode;
  hasHeader?: boolean;
}

const HomepageLayout = ({
  children,
  hasHeader = true,
}: HomepageLayoutProps) => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        minHeight: "100vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <p onClick={() => navigate(ROUTE_PATHS.ADMIN_HOME)}>Admin</p>
      {hasHeader && <Header />}

      <Box
        mb="200px"
        height="100%"
        width="100%"
        display="flex"
        flexDirection="column"

        //alignItems="center"
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default HomepageLayout;
