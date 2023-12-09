import React, { memo } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/css";

const App = memo(() => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
});

export default App;

