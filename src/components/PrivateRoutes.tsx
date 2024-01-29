import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const { pathname } = useLocation();
  const { isLoading, isAuthenticated } = useAuth0();
  // const isAuthenticated = true;
  // const isLoading = false;

  if (isLoading) return null;

  if (!isAuthenticated) return <Navigate to={`/login?returnUrl=${pathname}`} />;

  return <Outlet />;
};

export default PrivateRoutes;
