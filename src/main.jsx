import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import LoginUser from "./pages/LoginUser.jsx";
import MenuUser from "./pages/MenuUser.jsx";
import UploadDiary from "./pages/UploadDiary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/LoginUser",
    element: <LoginUser />,
  },
  {
    path: "/MenuUser",
    element: <MenuUser />,
  },
  {
    path: "UploadDiary",
    element: <UploadDiary />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
