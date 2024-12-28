import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Error } from "./pages/Error";
import { Day } from "./pages/Day";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Day></Day>,
      },
      {},
    ],
  },
]);
