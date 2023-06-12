import { BrowserRouter } from "react-router-dom";
import Router from "./components/app/Router";
import {  ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./config/theme";
import { useDarkMode } from 'usehooks-ts'
import { useMemo } from 'react'
function App() {
  const { isDarkMode } = useDarkMode(false);

  const activeTheme = useMemo(() => isDarkMode ? darkTheme : lightTheme, [isDarkMode])


  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={activeTheme}>
            <Router></Router>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
