import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Error } from "./pages/Error";
import { DayOverview } from "./pages/DayOverview";
import { WeekOverview } from "./Pages/WeekOverview";
import { StoryOverview } from "./pages/StoryOverview";
import { UsersOverview } from "./pages/UsersOverview";
import { UserProfile } from "./pages/UserProfile";
import { Search } from "./pages/Search";
import { Login } from "./pages/Login";
// import { ProtectedRoute } from "./components/ProtectedRoute";

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
        path: "week/:startDate?",
        element: <WeekOverview></WeekOverview>,
      },
      {
        path: "story/:id",
        element: <StoryOverview></StoryOverview>,
      },
      {
        path: "day/:date/:topic",
        element: <DayOverview></DayOverview>,
      },
      {
        path: "/users/all",
        element: <UsersOverview></UsersOverview>,
      },
      {
        path: "/users/:id",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/search/",
        element: <Search></Search>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
