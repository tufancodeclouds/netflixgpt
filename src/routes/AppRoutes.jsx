// Centralized routing
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppLayout from "../layouts/AppLayout";
import BrowseLayout from "../layouts/BrowseLayout";
import AuthGuard from "../components/AuthGuard";
import PageLoader from "../components/PageLoader";

// Lazy pages
const Login = lazy(() => import("../pages/Login"));
const Browse = lazy(() => import("../pages/Browse"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageLoader />}>
        <AppLayout />
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Login />,
      },

      // PROTECTED ROUTE INSIDE APP LAYOUT
      {
        path: "browse",
        element: (
          <AuthGuard>
            <Suspense fallback={<PageLoader />}>
              <BrowseLayout />
            </Suspense>
          </AuthGuard>
        ),
        children: [
          {
            index: true,
            element: <Browse />,
          },
        ],
      },
    ],
  },
]);
