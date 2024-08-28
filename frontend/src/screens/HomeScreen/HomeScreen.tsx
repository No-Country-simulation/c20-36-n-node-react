import { Box, ThemeProvider, Typography } from "@mui/material";
import { getMainTheme } from "../../theme/getMainTheme";

export default function HomeScreen() {
  return (
    <ThemeProvider theme={getMainTheme()}>
      <main>
        <Box sx={{ width: "100%", maxWidth: 375 }}>
          <Typography variant="h1" gutterBottom sx={{ color: "mono.white" }}>
            Hello World
          </Typography>
        </Box>
      </main>
    </ThemeProvider>
  );
}
