import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthProvider } from "./utils/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import App from "./App.jsx";
import LoginUser from "./pages/LoginUser.jsx";
import MenuUser from "./pages/MenuUser.jsx";
import UploadDiary from "./pages/UploadDiary.jsx";
import RegisterUser from "./pages/RegisterUser.jsx";
import FeedPost from "./pages/FeedPost.jsx"; // <- Corrigido

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/LoginUser", element: <LoginUser /> },
  { path: "/MenuUser", element: <MenuUser /> },
  { path: "/FeedPost", element: <FeedPost /> }, // <- Corrigido
  {
    path: "/UploadDiary",
    element: (
      <ProtectedRoute>
        <UploadDiary />
      </ProtectedRoute>
    ),
  },
  { path: "/RegisterUser", element: <RegisterUser /> },
]);

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
