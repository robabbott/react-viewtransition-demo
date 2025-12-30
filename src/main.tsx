import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Examples from "./pages/Examples";
import BasicExample from "./pages/examples/BasicExample";
import ListExample from "./pages/examples/ListExample";
import CustomExample from "./pages/examples/CustomExample";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/examples", element: <Examples /> },
  { path: "/examples/basic", element: <BasicExample /> },
  { path: "/examples/list", element: <ListExample /> },
  { path: "/examples/custom", element: <CustomExample /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
