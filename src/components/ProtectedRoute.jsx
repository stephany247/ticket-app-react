import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useToastStore } from "../store/useToast";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, logout } = useAuthStore();
  const { showToast } = useToastStore();

  useEffect(() => {
    if (!isAuthenticated && !logout) {
      showToast("Your session has expired — please log in again.", "error");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
