import { BrowserRouter } from "react-router-dom";
import Router from "./app.router";
import RootLayout from "@/app/app.layout";
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
