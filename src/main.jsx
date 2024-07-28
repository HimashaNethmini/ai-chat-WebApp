import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import Homepage from "./routes/homepage/Homepage.jsx";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";
import Dashboard from "./routes/dashboard/Dashboard.jsx"
import ChatPage from "./routes/chatPage/ChatPage.jsx";
import SigninPage from "./routes/signinPage/SigninPage.jsx";
import SignupPage from "./routes/signupPage/SignupPage.jsx";

/*enabling client side routing using layout*/
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SigninPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignupPage />
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
