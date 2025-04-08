import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <StrictMode>
        <Router></Router>
      </StrictMode>
      ,
    </BrowserRouter>
  </AuthProvider>
);
