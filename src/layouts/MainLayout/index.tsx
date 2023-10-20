import { Box, Container } from "@mui/material";
import Footer from "./Footer";
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
      style={{
        minHeight: "100vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {hasHeader && <Header />}
      <Container maxWidth="xl">
        <Box
          mt="80px"
          mb="200px"
          height="100%"
          width="100%"
          display="flex"
          flexDirection="column"
          //alignItems="center"
        >
          {children}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default HomepageLayout;
