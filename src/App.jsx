import React, { memo } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/css";
import AppHeader from "@/components/app-header";

const App = memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
    </ThemeProvider>
  );
});

export default App;

