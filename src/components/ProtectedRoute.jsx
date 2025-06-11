import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  console.log("Usuário atual:", user);

  if (!user) {
    return <Navigate to="/LoginUser" replace />;
  }

  return children;
}
