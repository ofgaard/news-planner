import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { SubmissionProvider } from "./context/SubmissionContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SubmissionProvider>
      <RouterProvider router={router}></RouterProvider>
    </SubmissionProvider>
  </StrictMode>
);
