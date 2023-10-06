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
    <Container maxWidth="xl">
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
    </Container>
  );
};

export default HomepageLayout;
