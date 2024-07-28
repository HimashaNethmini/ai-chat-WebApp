import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage.jsx'
import Dashboard from './routes/dashboard/Dashboard.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'

/*enabling client side routing */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage />
    ),
  },
  {
    path: "/dashboard",
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/chats/:id", element: <ChatPage/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

