import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

// AuthProvider wraps the app with Auth0 authentication context
// It provides authentication features like login, logout, and user session handlingS
export default function AuthProvider({ children }) {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={`${window.location.origin}/`}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
}
