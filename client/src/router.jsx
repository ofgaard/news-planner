import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Error } from "./pages/Error";
import { DayOverview } from "./pages/DayOverview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <DayOverview></DayOverview>,
      },
      {
        path: "day/:date?",
        element: <DayOverview></DayOverview>,
      },
      {
        path: "week/:date?",
      },
    ],
  },
]);
