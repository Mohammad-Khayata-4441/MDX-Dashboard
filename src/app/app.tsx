import { BrowserRouter } from "react-router-dom";
import Router from "../router/Router";
import RootLayout from "@/layouts/root.layout";
import AppProviders from "./components/Providers";
function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <AppProviders>
            <RootLayout>
              <Router></Router>
            </RootLayout>
          </AppProviders>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
