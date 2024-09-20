import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./auth/Auth0Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
