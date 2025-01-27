import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Error } from "./pages/Error";
import { DayOverview } from "./pages/DayOverview";
import { WeekOverview } from "./pages/WeekOverview";
import { StoryOverview } from "./pages/StoryOverview";

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
        element: <WeekOverview></WeekOverview>,
      },
      {
        path: "story/:id",
        element: <StoryOverview></StoryOverview>,
      },
    ],
  },
]);
