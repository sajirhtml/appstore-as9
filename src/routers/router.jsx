import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/Home";
import Loading from "../components/Loading";
import AppDetailsLayout from "../layouts/AppDetailsLayout";
import PrivateRoute from "../provider/PrivateRoute";
import PrivateRouter from "../provider/PrivateRoute";
import MyProfile from "../pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/apps.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/app/:id",
    element: (
      <PrivateRoute>
        <AppDetailsLayout></AppDetailsLayout>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch("/apps.json")
        .then((res) => res.json())
        .then((data) => {
          const app = data.find((app) => app.id === params.id);
          return app;
        }),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path:"/myprofile",
    element: <PrivateRoute>
        <MyProfile></MyProfile>
      </PrivateRoute>
  },
  {
    path: "/*",
    element: (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
      </div>
    ),
  },
]);

export default router;