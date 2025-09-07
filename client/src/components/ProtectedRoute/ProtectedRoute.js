import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/loader.component";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return children;
}
