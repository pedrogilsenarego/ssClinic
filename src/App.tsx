import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { theme } from "./theme/theme";

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <AppRoutes />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
