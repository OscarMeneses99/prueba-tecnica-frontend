import { createBrowserRouter } from "react-router-dom";
import GetStarted from "../pages/GetStarted.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import EditCandidates from "../pages/EditCandidates.jsx";
import NotFound from "../pages/NotFound.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GetStarted />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },

  {
    path: "/dashboard/:id",
    element: <EditCandidates />,
    errorElement: <NotFound />,
  },
  {
    path: "/*",
    element: <NotFound />,
    errorElement: <NotFound />,
  },
]);
