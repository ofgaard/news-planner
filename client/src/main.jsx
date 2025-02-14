import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { SubmissionProvider } from "./context/SubmissionContext";
import { AuthProvider } from "./context/AuthProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <SubmissionProvider>
        <RouterProvider router={router}></RouterProvider>
      </SubmissionProvider>
    </AuthProvider>
  </StrictMode>
);
