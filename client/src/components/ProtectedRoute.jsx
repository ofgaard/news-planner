import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }) => {
  const { session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session, navigate]);

  return session ? children : null;
};
