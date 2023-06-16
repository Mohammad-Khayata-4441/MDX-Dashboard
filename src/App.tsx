import { BrowserRouter } from "react-router-dom";
import Router from "./components/app/Router";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./config/theme";
import { useDarkMode } from 'usehooks-ts'
import { useEffect, useMemo } from 'react'
function App() {
  const { isDarkMode, } = useDarkMode(false);

  const activeTheme = useMemo(() => isDarkMode ? darkTheme : lightTheme, [isDarkMode])

  useEffect(() => {
    // Set body dark class To turn on dark mode in tailwind css
    isDarkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark')

  }, [isDarkMode])

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
