import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./auth/Auth0Provider";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
