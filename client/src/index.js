import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./auth/Auth0Provider";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
