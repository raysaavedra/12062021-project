import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import { muiTheme } from "./Styles";
import { renderRoutes, routes } from "./Router";

import "./App.css";

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </ThemeProvider>
);

export default App;
