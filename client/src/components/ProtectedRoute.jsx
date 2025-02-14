import { Navigate } from "react-router";
import { useAuth } from "../context/AuthProvider";

export const ProtectedRoute = ({ children }) => {
  const { session } = useAuth();

  return session ? children : <Navigate to="/login" />;
};
