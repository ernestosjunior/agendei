import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../../utils/cookies";
import { COOKIES } from "../../constants/cookies";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const authCookie = getCookie(COOKIES.login);

  return authCookie ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
