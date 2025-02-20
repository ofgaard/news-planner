import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { StoriesProvider } from "./context/StoryContext";

import { AuthProvider } from "./context/AuthProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <StoriesProvider>
        <RouterProvider router={router}></RouterProvider>{" "}
      </StoriesProvider>
    </AuthProvider>
  </StrictMode>
);
