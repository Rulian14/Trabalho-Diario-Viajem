import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginUser from "./pages/LoginUser.jsx";
import MenuUser from "./pages/MenuUser.jsx";
import UploadDiary from "./pages/UploadDiary.jsx";
import RegisterUser from "./pages/RegisterUser.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/LoginUser", element: <LoginUser /> },
  { path: "/MenuUser", element: <MenuUser /> },
  { path: "/UploadDiary", element: <UploadDiary /> },
  { path: "/RegisterUser", element: <RegisterUser /> },
]);

const root = document.getElementById("root");

// Cria a root UMA ÚNICA vez e renderiza a aplicação
createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
