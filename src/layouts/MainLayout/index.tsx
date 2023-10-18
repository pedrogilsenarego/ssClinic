import { Box, Container } from "@mui/material";
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
    <>
      {hasHeader && <Header />}
      <Container maxWidth="xl">
        <Box
          mt="220px"
          mb="100px"
          height="100%"
          width="100%"
          display="flex"
          flexDirection="column"
          //alignItems="center"
        >
          {children}
        </Box>
      </Container>
    </>
  );
};

export default HomepageLayout;
