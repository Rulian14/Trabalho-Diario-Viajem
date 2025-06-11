import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/LoginUser" replace />;
  }

  return children;
}
